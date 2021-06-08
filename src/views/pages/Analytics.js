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
//import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.css';
import 'react-tabulator/lib/css/tabulator_modern.css'
import * as API from '../../vibe/helpers/handleBackendAPIConnection'
import {ReactTabulator} from 'react-tabulator'
import {DashboardLayoutContext} from "../../layouts/DashboardLayout";

const chartColors = {
    red: 'rgb(233, 30, 99)',
    danger: 'rgb(233, 30, 99)',
    dangerTransparent: 'rgba(233, 30, 99, 0.8)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 180, 0)',
    green: 'rgb(34, 182, 110)',
    blue: 'rgb(68, 159, 238)',
    primary: 'rgb(68,159,238)',
    primaryTransparent: 'rgba(68,159,238,0.8)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',

    primaryShade1: 'rgb(68,159,238)',
    primaryShade2: 'rgb(23,139,234)',
    primaryShade3: 'rgb(14,117,202)',
    primaryShade4: 'rgb(9,85,148)',
    primaryShade5: 'rgb(12,70,117)',
    primaryShade6: 'rgb(10,56,93)',
    primaryShade7: 'rgb(10,49,81)',
};

const columns = [
    //{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center",},
    /* {title: "date", field: "date", },
     {title: "name", field: "name", },
     {title: "value", field: "value"},*/
    /*{title: 'valueBar', field: 'value', hozAlign: 'left', formatter: 'progress', editable: false, formatterParams:{
        min: 3.9,
        max: 5,
        color: chartColors.primary,
      },},*/
];

const tableOptions = {
    height: 475,
    layout: "fitColumns",
    columnMinWidth: 200,
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
            backgroundColor: chartColors[Object.keys(chartColors)[Math.floor(Math.random() * Object.keys(chartColors).length)]],
            //backgroundColor: Object.values(chartColors)[count++],
            fill: false,
        }
        if (!isMulti){
            //newObj.steppedLine = true;
            newObj.tension = 0.3
            newObj.pointRadius= 6;
            newObj.pointHoverRadius= 8;
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
    /*let ddd = JSON.parse(JSON.stringify(datasets));
    let avr = [];
    ddd.forEach((o) => {
        avr.push(o.data.reduce((a,b) => a + b, 0)/o.data.length);
    })
for (let i = 0; i < avr.length; i++) {
    if (avr[i] < 10* avr[i+1])
    {
        datasets[i]['yAxisID'] = 'ass';
    }
}*/
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
            isScaleZero: false,
        };

        if (!props.location.state) {
            props.location.state = {}
        }
    }

    componentDidMount() {
        API.getData(this.props.location.state.data).then(res => this.setState({res: JSON.parse(res)}));
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
                    //onMouseLeave={context.sidebarCollapsed ? context.toggleSideCollapse : null}
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
                                            onClick={() => this.ref.table.download("csv", "data.cv")}>Download
                                        Data (CSV format)</Button>
                                    <Button color="success" outline
                                            onClick={() => this.ref.table.download("xlsx", "data.xlsx")}>Download
                                        Data (XLSx format)</Button>
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
                                    <Button color='info' outline><a href='#'>Save As Image</a></Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col className='m-r-auto' md={3}>
                            <Card>
                                <CardHeader> Legend </CardHeader>
                                <CardBody>
                                    <div id='legend-container'/>
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
                                            <Line ref={ref => (this.childChart[index] = ref)}
                                                  data={col}
                                                  options={{
                                                     legend: {display: false}, tooltips: {enabled: true},
                                                     //scales: {yAxes: [{ticks: {suggestedMin: 0, min: 0}}]},
                                                     scales: {yAxes: [{ticks: {padding: 21}}]},
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
                                            <Button color='info' outline><a href='#'>Save As Image</a></Button>
                                            <Button color='warning' outline onClick={() => {
                                                if (this.state.isScaleZero){
                                                    this.childChart[index].chart_instance.options.scales = {yAxes:[{ticks: {padding: 21, suggestedMin: 0, min: 0}}]};
                                                    this.setState({isScaleZero: false});
                                                } else {
                                                    this.childChart[index].chart_instance.options.scales = {yAxes:[{ticks: {padding: 21,}}]};
                                                    this.setState({isScaleZero: true});
                                                }
                                                this.childChart[index].chart_instance.update();
                                            }}>Change Y Scale Origin</Button>
                                        </CardFooter>
                                    </Card>) :
                                    (<Card style={{width: '100%', height: '95%'}}>
                                        <CardHeader>{col.datasets[0].label}</CardHeader>
                                        <CardBody style={{textAlign: 'center'}}>
                                            <h1 className='m-a-auto'>No Data!</h1>
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
