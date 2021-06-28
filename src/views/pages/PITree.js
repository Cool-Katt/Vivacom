import React, {Component} from 'react';
import {Card, CardBody, CardFooter, Button, Row, Col, CardHeader, Form, FormGroup, Input} from 'reactstrap';
import {tree} from '../../KQICategorizedList';
import Tree from 'react-d3-tree';
import TreeLegend from "../../vibe/components/PITree/TreeLegend";
import downloadSvg, {downloadPng} from "svg-crowbar";
import html2canvas from "html2canvas";

class PITree extends Component {
    constructor(props) {
        super(props);
        let thisMonth = new Date();
        thisMonth.setMonth(thisMonth.getMonth() - 1);
        thisMonth = thisMonth.toISOString().split("T")[0].slice(0, 7);
        this.state = {
            thisMonth,
            treeData: tree,
        };
    }

    renderSvgNode = ({nodeDatum, toggleNode}) => {
        let colour = 'rgba(153,102,255,0.8)';
        let testedValue = nodeDatum.attributes?.value;

        if (testedValue <= 1) {
            colour = 'rgba(233,30,99,0.8)';
        } else if (testedValue <= 2) {
            colour = 'rgba(255,159,64,0.8)';
        } else if (testedValue <= 3) {
            colour = 'rgba(255,230,0,0.8)';
        } else if (testedValue <= 4) {
            colour = 'rgba(34,182,110,0.8)';
        } else if (testedValue <= 5) {
            colour = 'rgba(68,159,238,0.8)';
        }
        if (testedValue === null) {
            colour = 'rgba(153,102,255,0.8)';
        }

        return (
            <g>
                <circle fill={colour} r="20" onClick={toggleNode}/>
                <text fill="black" strokeWidth="1" x="30">
                    {nodeDatum.name}
                </text>
                {(nodeDatum.attributes?.value || nodeDatum.attributes?.value === 0) ? (
                    <text fill="gray" stroke="gray" x="30" dy="20" strokeWidth="1">
                        <tspan x="30" dy="20">Value: {nodeDatum.attributes?.value}</tspan>
                        {nodeDatum.attributes?.weight ?
                        <tspan x="30" dy="20">Weight: {nodeDatum.attributes?.weight}</tspan> : null}
                    </text>
                ) : (
                    <text fill="gray" stroke="gray" x="30" dy="20" strokeWidth="1">
                        Value: no data!
                    </text>
                )}
            </g>
        )
    };

    handleSubmit() {
        return (e => {
            e.preventDefault()

            let formData = new FormData(e.currentTarget);
            let data = {
                msisdn: formData.get('msisdn'),
                date: formData.get('date'),
            }
            console.log(data)
            //TODO: Handle data requests to the API for tree. Talk to Stef
            let jsonData = require('./../../DemoSerialTreePi.json');

            this.setState(prevState => {return({...prevState, treeData: jsonData})})
        })
    }

    render() {
        return (
            <div>
                <Row style={{height: '83vh'}}>
                    <Col md={11} className='m-a-auto'>
                        <Card style={{height: '100%'}}>
                            <CardHeader>
                                <Form onSubmit={this.handleSubmit()} style={{display: 'flex', alignContent: 'flex-start'}}>
                                    <FormGroup className='p-t-md p-r-sm p-l'>
                                        <Input type="number" name="msisdn" id="msisdn" placeholder="MSISDN -or- empty"/>
                                    </FormGroup>
                                    <FormGroup className='p-t-md'>
                                        <Input type="month" name="date" id="endDate"
                                               max={this.state.thisMonth.toString()}
                                               placeholder="20yy-MM"
                                               defaultValue={this.state.thisMonth.toString()}
                                               pattern="20[0-9]{2}-[0-1][0-9]"/>
                                    </FormGroup>
                                    <FormGroup className='p-t-md'>
                                        <Button color='primary' outline>
                                            <i className='fa fa-search'/>
                                        </Button>
                                        <Button color='info' outline onClick={e => {
                                            e.preventDefault();
                                            let svg = document.querySelector('.rd3t-svg').cloneNode(true);
                                            downloadSvg(svg, 'PITree', {css: 'internal'})
                                        }}>
                                            <i className='fa fa-save'/>
                                            &nbsp;Save As SVG
                                        </Button>
                                        <Button color='success' outline onClick={e => {
                                            e.preventDefault();
                                            let captureNode = document.querySelector('.capture-node')
                                            html2canvas(captureNode).then(canvas => {
                                                let a = document.createElement('a');
                                                a.download = 'PITree.png'
                                                a.href = canvas.toDataURL()
                                                a.target = '_blank'
                                                a.click();
                                            })
                                        }}>
                                            <i className='fa fa-save'/>
                                            &nbsp;Save As PNG
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardHeader>
                            <CardBody className='capture-node'>
                                {this.state.treeData ?
                                    (<Tree data={this.state.treeData} translate={{x: '120', y: '300'}} zoom='0.7'
                                                              initialDepth='2'
                                                              //separation={{nonSiblings: 2, siblings:3.5}} orientation='vertical'
                                                              separation={{nonSiblings: 1, siblings:0.5}}
                                                              depthFactor='400'
                                                              enableLegacyTransitions={true}
                                                              renderCustomNodeElement={this.renderSvgNode}/>)
                                    : (<p className='m-a-auto p-a-xxl'>Nothing to see here yet.</p>)
                                }
                            </CardBody>
                            <CardFooter>
                                {TreeLegend()}
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PITree;
