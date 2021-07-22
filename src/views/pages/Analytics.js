import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button, CardFooter
} from 'reactstrap';
import {Bar, Line} from 'react-chartjs-2';
import Chart from 'chart.js'
import 'react-tabulator/lib/css/tabulator_modern.css'
import * as API from '../../vibe/helpers/handleBackendAPIConnection'
import {ReactTabulator} from 'react-tabulator'
import {DashboardLayoutContext} from "../../layouts/DashboardLayout";
import {colourMaker} from "../../KQICategorizedList"

const columns = [];

const tableOptions = {
    height: 475,
    layout: "fitColumns",
    columnMinWidth: 120,
    autoColumns: true,
    tooltipsHeader: true,
    movableColumns: true,
    placeholder: 'Please Wait! Your data is being loaded.',
    //responsiveLayout: 'collapse',
    initialSort: {column: 'date', dir: 'asc'},
    downloadDataFormatter: (data) => data,
    downloadReady: (fileContents, blob) => blob,
};

function transformDataForCharts(data, isMulti = true) {
    let labels = [];
    let datasets = [];
    if (data.length < 1) {
        return {labels, datasets,}
    }
    const objKeys = Object.keys(Object.values(data).shift());
    objKeys.forEach((key) => {
        const newObj = {
            label: key,
            data: [],
            backgroundColor: colourMaker(key),
            fill: false,
        }
        if (!isMulti){
            newObj.tension = 0.3;
            newObj.borderColor = JSON.parse(JSON.stringify(newObj.backgroundColor));
            delete(newObj.backgroundColor)
        }
        data.forEach((obj) => {
            newObj['data'].push(obj[key]);
        })

        if (newObj['data'].reduce((acc, curr) => acc + curr) === 0) {
            newObj['data'] = [];
        }
        datasets.push(newObj);
    })
    for (const dataset of datasets) {
        if (dataset.label === 'Date') {
            labels = dataset.data;
            datasets.splice(datasets.indexOf(dataset), 1);
        }
    }
    let delCount = 0;
    for (const dataset of datasets) {
        if (dataset.label === 'Msisdn' || dataset.label === 'L2regionname' || dataset.label === 'L3regionname'
            || dataset.label === 'L2regionid' || dataset.label === 'L3regionid') {
            delCount++;
        }
    }
    datasets.splice(0, delCount);

    if (!isMulti) {
        let res = [];
        datasets.forEach(s => res.push({
            labels,
            datasets: [s],
        }))
        return res;
    } else {
        datasets = datasets.filter(s => s.data.length > 0);
    }

    return ({
        labels,
        datasets,
    });
}

export default class AnalyticsPage extends Component {
    childChart = [];
    constructor(props) {
        super(props);

        this.state = {
            res: [],
            isScaleZero: true,
        };

        if (!props.location.state) {
            props.location.state = {}
        }
    }

    componentDidMount() {
        API.getData(this.props.location.state.data).then(res => this.setState({res: JSON.parse(res)})).catch(err => console.log(err));
        //API.getData(this.props.location.state.data).then(res => console.log(res));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let legend = document.querySelector('#legend-container');
        legend.innerHTML = this.chart.chart_instance.generateLegend();
        let legendItems = legend.getElementsByTagName('li');
        for (const item of legendItems) {
            item.addEventListener("click", legendClickCallback, false);
        }

        function legendClickCallback(event) {
            event = event || window.event;

            let target = event.target || event.srcElement;
            while (target.nodeName !== 'LI') {
                target = target.parentElement;
            }
            let parent = target.parentElement;
            let chartId = parseInt(parent.classList[0].split("-")[0], 10);
            let chart = Chart.instances[chartId];
            let index = Array.prototype.slice.call(parent.children).indexOf(target);

            chart.legend.options.onClick.call(chart, event, chart.legend.legendItems[index]);
            if (chart.isDatasetVisible(index)) {
                target.classList.remove('hidden');
            } else {
                target.classList.add('hidden');
            }
        }
    }

    render() {
        this.state.res.forEach(obj => {
            Object.keys(obj).forEach(key => {
                //obj[key] === null && delete (obj[key]);
                key !== 'Msisdn' && (!isNaN(obj[key]) && (Object.assign(obj,
                    {[key]: Math.round((obj[key] + Number.EPSILON) * 1000) / 1000})));
                key === 'L2regionid' && delete obj[key];
                key === 'L3regionid' && delete obj[key];
                key === 'L2regionname' && obj[key] === 0 && delete obj[key];
                key === 'L3regionname' && obj[key] === 0 && delete obj[key];
                key === 'Date' && (Object.assign(obj, {[key]: obj[key].split('T')[0]}));
            });
        })

        const toMatrix = (arr, width) =>
            arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows, []);
        let rows = toMatrix(Array.from(transformDataForCharts(this.state.res, false)), 2);

        return (
            <DashboardLayoutContext.Consumer>{context => (
                <div
                    onMouseEnter={!context.sidebarCollapsed ? context.toggleSideCollapse : null}
                    onMouseLeave={context.sidebarCollapsed ? context.toggleSideCollapse : null}
                >
                    <Row>
                        <Col className='m-a-auto' md={{size: 11}}>
                            <Card>
                                <CardHeader> Table </CardHeader>
                                <CardBody>
                                    <ReactTabulator data={this.state.res}
                                                    columns={columns}
                                                    options={tableOptions}
                                                    ref={ref => (this.ref = ref)}
                                                    hover
                                    />
                                </CardBody>
                                <CardFooter className='m-a-auto'>
                                    <Button color="info" outline
                                            onClick={() => this.ref.table.download("csv", "data.cv")}>
                                        <i className='fa fa-save'/>
                                        &nbsp;Download Data (CSV format)</Button>
                                    <Button color="success" outline
                                            onClick={() => this.ref.table.download("xlsx", "data.xlsx")}>
                                        <i className='fa fa-save'/>
                                        &nbsp;Download Data (XLSx format)</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col className='m-l-auto' md={8}>
                            <Card onMouseEnter={() => document.getElementById('mainGraph').style.display = 'inline-block'}
                                  onMouseLeave={() => document.getElementById('mainGraph').style.display = 'none'}>
                                <CardHeader> Graph </CardHeader>
                                <CardBody>
                                    <div>
                                        <Bar
                                            ref={ref => (this.chart = ref)}
                                            data={transformDataForCharts(this.state.res)}
                                            width={2068}
                                            height={846}
                                            options={{
                                                legend: {display: false}, tooltips: {enabled: true},
                                                scales: {yAxes: [{ticks: {suggestedMin: 0, min: 0}}]},
                                                animation: {
                                                    onComplete: function () {
                                                        let a = document.getElementById('mainGraph').firstChild.firstChild;
                                                        a.setAttribute('href', this.toBase64Image());
                                                        a.download = 'summarized-graph.png';
                                                    }
                                                },
                                            }}
                                        />
                                    </div>
                                </CardBody>
                                <CardFooter className='m-a-auto' id='mainGraph'
                                            style={{display: 'none'}}>
                                    <Button color='info' outline>
                                        <a href='/'>
                                            <i className='fa fa-save'/>
                                            &nbsp;Save As Image
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col className='m-r-auto' md={3}>
                            <Card>
                                <CardHeader> Legend </CardHeader>
                                <CardBody>
                                    <div id='legend-container'/>
                                    <div id='legend-def'/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    {Object.values(rows).map((row, index) => (
                        <Row key={index}>
                            {row.map((col, index) => (<Col key={index} className='m-a-auto' md={5}>
                                {!col.datasets[0].data.length < 1 ?
                                    (<Card
                                        onMouseEnter={() => document.getElementById(col.datasets[0].label).style.display = 'inline-block'}
                                        onMouseLeave={() => document.getElementById(col.datasets[0].label).style.display = 'none'}>
                                        <CardHeader>{col.datasets[0].label}</CardHeader>
                                        <CardBody>
                                            <Line ref={ref => (this.childChart[col.datasets[0].label] = ref)}
                                                  data={col}
                                                  options={{
                                                     legend: {display: false}, tooltips: {enabled: true},
                                                     //scales: {yAxes: [{ticks: {suggestedMin: 0, min: 0}}]},
                                                     scales: {yAxes: [{ticks: {padding: 21}}]},
                                                     layout: {padding: 15,},
                                                     animation: {
                                                         onComplete: function () {
                                                             let a = document.getElementById(col.datasets[0].label).firstChild.firstChild;
                                                             a.setAttribute('href', this.toBase64Image());
                                                             a.download = `${col.datasets[0].label}.png`;
                                                         }
                                                     },
                                                 }}
                                            />
                                        </CardBody>
                                        <CardFooter className='m-a-auto' id={col.datasets[0].label}
                                                    style={{display: 'none'}}>
                                            <Button color='info' outline><a href='/'><i className='fa fa-save'/>&nbsp;Save As Image</a></Button>
                                            <Button color='warning' outline onClick={() => {
                                                if (this.state.isScaleZero){
                                                    this.childChart[col.datasets[0].label]
                                                        .chart_instance.options.scales = {yAxes:[{ticks: {padding: 21, suggestedMin: 0, min: 0}}]};

                                                    this.childChart[col.datasets[0].label].chart_instance.data.datasets[0].pointRadius = 0
                                                    this.childChart[col.datasets[0].label].chart_instance.data.datasets[0].pointHoverRadius = 0
                                                    this.childChart[col.datasets[0].label].chart_instance.data.datasets[0].pointHitRadius = 20

                                                    this.setState({isScaleZero: false});
                                                } else {
                                                    this.childChart[col.datasets[0].label]
                                                        .chart_instance.options.scales = {yAxes:[{ticks: {padding: 21,}}]};

                                                    this.childChart[col.datasets[0].label].chart_instance.data.datasets[0].pointRadius = 6
                                                    this.childChart[col.datasets[0].label].chart_instance.data.datasets[0].pointHoverRadius = 8
                                                    this.childChart[col.datasets[0].label].chart_instance.data.datasets[0].pointHitRadius = 10

                                                    this.setState({isScaleZero: true});
                                                }
                                                this.childChart[col.datasets[0].label].chart_instance.update();
                                            }}>Normalize Scale</Button>
                                        </CardFooter>
                                    </Card>) :
                                    (<Card style={{width: '100%', height: '95%'}}>
                                        <CardHeader>{col.datasets[0].label}</CardHeader>
                                        <CardBody style={{textAlign: 'center'}}>
                                            <h1 className='m-a-auto p-a-xxl'>No Data!</h1>
                                        </CardBody>
                                    </Card>)
                            }</Col>))}
                        </Row>
                    ))}
                </div>
            )}</DashboardLayoutContext.Consumer>
        );
    }
}
