import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Progress,
    Button, CardFooter
} from 'reactstrap';
import {Switch} from '../../vibe';
import {Doughnut, Line, Polar, Bar} from 'react-chartjs-2';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.min.css';

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

function handler(data) {
    let labels = [];
    let datasets = [];
    let count = 11;
    const objKeys = Object.keys(Object.values(data).shift());
    objKeys.forEach((key) => {
        const newObj = {
            label: key,
            data: [],
            backgroundColor: chartColors[Object.keys(chartColors)[Math.floor(Math.random() * Object.keys(chartColors).length)]],
            //backgroundColor: Object.values(chartColors)[count++],
            fill: false,
        }
        data.forEach((obj) => {
            newObj['data'].push(obj[key]);
        })
        datasets.push(newObj);
    })
    labels = datasets.shift().data;
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
    return ({
        labels,
        datasets,
    });
}

export default class AnalyticsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            facebook: true,
            twitter: false
        };

        if (!props.location.state) {
            props.location.state = {}
        }
    }

    render() {
        console.log(this.props.location.state.data)
        /*fetch('http://panoramamed/API_KQI_PI/weatherforecast/details?DateStart=2020-11-01T23:59:59&DateEnd=2021-02-01T23:59:59')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));*/

        const donutData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            datasets: [
                {
                    data: [3.675, 2, 5, 4.44, 3.4],
                    backgroundColor: [
                        chartColors.primaryShade1,
                        chartColors.primaryShade2,
                        chartColors.primaryShade3,
                        chartColors.primaryShade4,
                        chartColors.primaryShade5,
                    ],
                    hoverBackgroundColor: [
                        chartColors.primaryShade6,
                        chartColors.primaryShade6,
                        chartColors.primaryShade6,
                        chartColors.primaryShade6,
                        chartColors.primaryShade6,
                    ]
                }
            ]
        };
        const line = {
            /*data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'PI',
                        data: [3.675, 2, 5, 4.44, 3.4],
                        backgroundColor: chartColors.primary
                        /!*data: this.sample.map(v => Object.values(v)),*!/
                        /!*borderColor: 'transparent',
                        backgroundColor: chartColors.primaryShade3,
                        pointBackgroundColor: 'rgba(0,0,0,0)',
                        pointBorderColor: 'rgba(0,0,0,0)',
                        borderWidth: 4,*!/
                    },
                    {
                        label: 'cs',
                        data: [3, 5, 2, 4.44, 1, 7],
                        /!*data: this.sample.map(v => Object.values(v)),*!/
                        borderColor: 'transparent',
                        backgroundColor: chartColors.green,
                        fill: false
                    },

                ]
            },*/
            options: {
                scales: {
                    xAxes: [
                        {
                            display: true
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            ticks: {
                                suggestedMin: 0,
                            }
                        }
                    ]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                }
            }
        };

        const sampleKQI = [
            {
                date: '2021-02-16',
                Page_Response_Delay_ms: 743.12030075188,
                Page_DL_Throughput_Kbps: 2386.10690493625,
                Page_DL_Throughput_Kbps_nom: 767475824000,

            },
            {
                date: '2021-02-17',
                Page_Response_Delay_ms: 127.389830508475,
                Page_DL_Throughput_Kbps: 3161.337867887,
                Page_DL_Throughput_Kbps_nom: 367047816000,
            },
            {
                date: '2021-02-18',
                Page_Response_Delay_ms: 128.276315789474,
                Page_DL_Throughput_Kbps: 2765.7355910785,
                Page_DL_Throughput_Kbps_nom: 470363032000,
            },
        ]

        const samplePI = [
            {
                date: '2021-01',
                PS: 4.572,
                WEB: 4.68,
                WEB_Browser_Integrity: 4.2,
            },
            {
                date: '2020-12',
                PS: 4.72,
                WEB: 4.223,
                WEB_Browser_Integrity: 4.0,
            }
        ]

        const sample = [
            {
                "date": "2021-02",
                "perceivedCallSuccessRate": 0.9936106807898896,
                "e2eCallConnectionDelayMs": 3466.375533041896,
                "perceivedCallDropRate": 0.0024882482332291085,
                "smsOriginationSuccessRate": 0.9541260194665743,
                "smsOriginationDelayMs": 2542.9688488300753,
                "smsTerminationRate": 0.9810440431474812,
                "smsTerminationDelayMs": 2157.935677301143,
                "pageResponseDelayMs": 529.4341861688464,
                "pageDlTcpRetransmissionRate": 0.0073895183844320655,
                "pageUlTcpRetransmissionRate": 0.003101366547900281,
                "pageE2eDelay": 15.867799689531818,
                "pageServerSideRtt": 29.680610399910996,
                "pageClientSideRtt": 114.18437631725097,
                "videoStreamingDownloadThroughputKbps": 4119.237070367197,
                "videoStreamingXKbStartDelay": 1694.7789677739243,
                "videoStreamDlTcpRetransmissionRate": 0.002772641749283882,
                "videoStreamUlTcpRetransmissionRate": 0.00029369852119922745,
                "videoStreamServerSideRoundTripTimeMs": 22.555849209846688,
                "videoStreamClientSideRoundTripTimeMs": 132.50507648473345,
                "videoStreamE2eDelay": 1.0672166248725703,
                "imServerSideRoundTripTimeMs": 44.54285004449661,
                "imClientSideRoundTripTimeMs": 93.99855512170825,
                "imUlTcpPacketsLossRate": 0.0012436920724350877,
                "imDlTcpPacketsLossRate": 0.001690298977160164,
                "imInteractingDelay": 256.9635629096724,
                "voipServerSideRoundTripTimeMs": 26.315022058355666,
                "voipClientSideRoundTripTimeMs": 44.13912137311736,
                "voipUplinkThroughputKbps": 886.5987739901898,
                "voipDownlinkThroughputKbps": 576.0029609748448,
                "voIpUlTcpPacketsLossRate": 0.0005244008904205397,
                "voIpDlTcpPacketsLossRate": 0.0011678999926022272,
                "fileAccessServerSideUplinkTcpPacketLossRate": 0.00016156083329960355,
                "fileAccessServerSideDownlinkTcpPacketLossRate": 0.0028096544995235818,
                "fileAccessClientSideUplinkTcpPacketLossRate": 0.0004561573296324117,
                "fileAccessClientSideDownlinkTcpPacketLossRate": 0.0001640449860719132,
                "fileAccessUplinkTcpPacketLossRate": 0.0006177181629320153,
                "fileAccessDownlinkTcpPacketLossRate": 0.00027212676802385244,
                "fileAccessUplinkThroughputKbps": 1537.6954050210493,
                "fileAccessDownlinkThroughputKbps": 2184.266751271677,
                "fileAccessServerSideRoundTripTimeMs": 57.98682922399871,
                "fileAccessClientSideRoundTripTimeMs": 211.62326053768712,
                "fileSharingResponseDelay": 549.2044710895768,
                "fileSharingUlThroughputKbps": 1551.9464666388917,
                "fileSharingDlThroughputKbps": 2278.505014962408,
                "multimediaResponseDelay": 531.5957270354515,
                "multimediaUlThroughputKbps": 383.25746877921875,
                "multimediaDlThroughputKbps": 589.1069451760837,
                "voIpVoiceUlDuration": 16555526.434020067,
                "voIpVoiceDlDuration": 16469624.522041766,
                "voIpVideoUlDuration": 24322351.04210893,
                "voIpVideoDlDuration": 24156048.981191564,
                "fileSharingUlDuration": 4525.376380737306,
                "fileSharingDlDuration": 4670.311235753583,
                "multimediaUlDurationMs": 1378.0825548994342,
                "multimediaDlDurationMs": 1071.7597207319377,
                "pageDlThroughputKbps": 1035.0424891348455
            },
            {
                "date": "2021-01",
                "perceivedCallSuccessRate": 0.9927700554680254,
                "e2eCallConnectionDelayMs": 3515.9013986367595,
                "perceivedCallDropRate": 0.0028756032734652097,
                "smsOriginationSuccessRate": 0.9387923998480405,
                "smsOriginationDelayMs": 2648.3038383899097,
                "smsTerminationRate": 0.9815946717773922,
                "smsTerminationDelayMs": 2191.800670647563,
                "pageResponseDelayMs": 554.7314481501692,
                "pageDlTcpRetransmissionRate": 0.007941977649113382,
                "pageUlTcpRetransmissionRate": 0.00318346749713086,
                "pageE2eDelay": 17.235215451886205,
                "pageServerSideRtt": 30.365021413978333,
                "pageClientSideRtt": 121.45319484891161,
                "videoStreamingDownloadThroughputKbps": 4240.613590746663,
                "videoStreamingXKbStartDelay": 1742.957710015474,
                "videoStreamDlTcpRetransmissionRate": 0.0030532614901954236,
                "videoStreamUlTcpRetransmissionRate": 0.00019595846368721727,
                "videoStreamServerSideRoundTripTimeMs": 22.47348027316409,
                "videoStreamClientSideRoundTripTimeMs": 136.43843279725667,
                "videoStreamE2eDelay": 1.3080771857187852,
                "imServerSideRoundTripTimeMs": 45.51289010552275,
                "imClientSideRoundTripTimeMs": 93.5782440077448,
                "imUlTcpPacketsLossRate": 0.0012310066709308764,
                "imDlTcpPacketsLossRate": 0.0018383203798530052,
                "imInteractingDelay": 237.7989651384937,
                "voipServerSideRoundTripTimeMs": 34.20204551995436,
                "voipClientSideRoundTripTimeMs": 51.805641163191446,
                "voipUplinkThroughputKbps": 921.3477428867508,
                "voipDownlinkThroughputKbps": 663.0130258174245,
                "voIpUlTcpPacketsLossRate": 0.0007068406892539322,
                "voIpDlTcpPacketsLossRate": 0.0020066060713678485,
                "fileAccessServerSideUplinkTcpPacketLossRate": 0.000166402533250172,
                "fileAccessServerSideDownlinkTcpPacketLossRate": 0.0028285110047626748,
                "fileAccessClientSideUplinkTcpPacketLossRate": 0.0005269490110126353,
                "fileAccessClientSideDownlinkTcpPacketLossRate": 0.0001708390833878251,
                "fileAccessUplinkTcpPacketLossRate": 0.0006933515442628073,
                "fileAccessDownlinkTcpPacketLossRate": 0.0002753531571717576,
                "fileAccessUplinkThroughputKbps": 1453.806867593826,
                "fileAccessDownlinkThroughputKbps": 2228.0699233403034,
                "fileAccessServerSideRoundTripTimeMs": 57.20546779887533,
                "fileAccessClientSideRoundTripTimeMs": 229.07633500900425,
                "fileSharingResponseDelay": 470.40186667673316,
                "fileSharingUlThroughputKbps": 1462.201422606202,
                "fileSharingDlThroughputKbps": 2318.4550355582764,
                "multimediaResponseDelay": 487.6623973811132,
                "multimediaUlThroughputKbps": 372.5604500724303,
                "multimediaDlThroughputKbps": 617.8636756013427,
                "voIpVoiceUlDuration": 14867197.397716265,
                "voIpVoiceDlDuration": 14779998.923100293,
                "voIpVideoUlDuration": 21658541.8471857,
                "voIpVideoDlDuration": 21448981.84970404,
                "fileSharingUlDuration": 3781.713666126923,
                "fileSharingDlDuration": 3856.9520727981553,
                "multimediaUlDurationMs": 1148.0952219589738,
                "multimediaDlDurationMs": 782.1346248786748,
                "pageDlThroughputKbps": 1083.3299640328623
            }
            ]


        const columns = [
            /* {title: "date", field: "date", },
             {title: "name", field: "name", },
             {title: "value", field: "value"},*/
            /*{title: 'valueBar', field: 'value', hozAlign: 'left', formatter: 'progress', editable: false, formatterParams:{
                min: 3.9,
                max: 5,
                color: chartColors.primary,
              },},*/
        ]

        const options = {
            height: 400,
            layout: "fitColumns",
            columnMinWidth: 150,
            autoColumns: true,
            tooltipsHeader: true,
            initialSort: {column: 'date', dir: 'asc'},
            columnMoved: (e, column) => {console.log(column.getCells())},
            downloadDataFormatter: (data) => data,
            downloadReady: (fileContents, blob) => blob,
            /*dataTree: true,
            dataTreeStartExpanded: true,*/
            /*dataTreeElementColumn: "name"*/
        };


        /*date		msisdn		Page_Response_Delay_ms	Page_DL_Throughput_Kbps	Page_DL_Throughput_Kbps_nom
        2021-02-16	887592409	743.12030075188			2386.10690493625		767475824000 --
        2021-02-19	887592409	228.1					3140.14673164607		694646680000
        2021-02-21	887592409	1190					4713.40549036594		91930864000
        2021-02-17	887592409	127.389830508475		3161.337867887			367047816000 --
        2021-02-18	887592409	128.276315789474		2765.7355910785			470363032000 --
        2021-02-20	887592409	457.529411764706		2644.47303082192		494199120000

        2021-01     887592409   PS-4.572    WEB-4.68    WEB_Browser_Integrity-4.2
        */

        return (
            <DashboardLayoutContext.Consumer>{context => (
                <div
                    onMouseEnter={!context.sidebarCollapsed ? context.toggleSideCollapse : null}
                    /*onMouseLeave={context.sidebarCollapsed ? context.toggleSideCollapse : null}*/>
                    <div className="m-b">
                        <h2>Query results: {this.props.location.state.data?.type}</h2>
                        <p className="text-muted">
                            Here's what's going on with the selected data.
                        </p>
                    </div>
                    <Row>
                        <Col md={{size: 11}}>
                            <Card>
                                <CardHeader> Table </CardHeader>
                                <CardBody>
                                    <ReactTabulator data={sample}
                                                    columns={columns}
                                                    options={options}
                                                    ref={ref => (this.ref = ref)}
                                                    hover
                                    />
                                </CardBody>
                                <CardFooter>
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
                    {/*<Row>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Page Views{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>13K</span>
                </h2>{' '}
                <i
                  className="fa fa-caret-down text-danger"
                  aria-hidden="true"
                />
                <Progress value={77} color="warning" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Product Sold{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>1,890</span>
                </h2>{' '}
                <i className="fa fa-caret-up text-danger" aria-hidden="true" />
                <Progress value={77} color="success" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Server Capacity{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="inline-block">
                  <span>14%</span>
                </h2>
                <Progress value={14} color="primary" />
              </CardBody>
            </Card>
          </Col>
        </Row>*/}
                    <hr/>
                    <Row>
                        <Col md={{size: 10, offset: 1}}>
                            <Card>
                                <CardHeader>Traffic</CardHeader>
                                <CardBody>
                                    <div className="full-bleed">
                                        <Bar
                                            //data={line.data}
                                            data={handler(sample)}
                                            width={2068}
                                            height={846}
                                            legend={{display: false}}
                                            options={line.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        {/*<Col md={4} sm={12}>
                            <Card>
                                <CardHeader>Product Views</CardHeader>
                                <CardBody>
                                    <Polar
                                        data={donutData}
                                        width={908}
                                        height={768}
                                        legend={{display: false}}
                                    />
                                </CardBody>
                            </Card>
                        </Col>*/}
                    </Row>

                    {/*<Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>Conversions</CardHeader>
              <CardBody>
                <Row className="m-b-md">
                  <Col xs={4}>
                    <h5>Added to Cart</h5>
                    <div className="h2">4.30%</div>
                    <small className="text-muted">23 Visitors</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Reached Checkout</h5>
                    <div className="h2">2.93</div>
                    <small className="text-muted">12 Visitors</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Pruchased</h5>
                    <div className="h2">10</div>
                    <small className="text-muted">10 Customers</small>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>Integrations</CardHeader>
              <CardBody>
                <Switch
                  enabled={this.state.facebook}
                  toggle={() => {
                    this.setState(prevState => ({ facebook: !prevState.facebook }));
                  }}
                />
                <span className="text-facebook pull-right">
                  <i className="fa fa-facebook" /> Facebook
                </span>
                <hr />
                <Switch
                  enabled={this.state.twitter}
                  toggle={() => {
                    this.setState(prevState => ({ twitter: !prevState.twitter }));
                  }}
                />
                <span className="text-twitter pull-right">
                  <i className="fa fa-twitter" /> Twitter
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>*/}
                </div>
            )}</DashboardLayoutContext.Consumer>
        );
    }
}
