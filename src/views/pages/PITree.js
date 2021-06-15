import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Card, CardBody, CardFooter, Button, Row, Col, CardHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import {tree} from '../../KQICategorizedList'
import Tree from 'react-d3-tree'
import TreeLegend from "../../vibe/components/PITree/TreeLegend";

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

class PITree extends Component {
    constructor(props) {
        super(props);
        let thisMonth = new Date();
        thisMonth.setMonth(thisMonth.getMonth() - 1);
        thisMonth = thisMonth.toISOString().split("T")[0].slice(0, 7);
        this.state = {
            thisMonth,
            //treeData: tree,
        };
    }

    renderSvgNode = ({nodeDatum, toggleNode}) => {
        let colour = 'rgb(153, 102, 255, 0.8)';

        switch (nodeDatum.attributes?.value) {
            case 5:
                colour = 'rgba(68,159,238,0.8)';
                break;
            case 4:
                colour = 'rgba(34,182,110,0.8)';
                break;
            case 3:
                colour = 'rgba(255,230,0,0.8)';
                break;
            case 2:
                colour = 'rgba(255,159,64,0.8)';
                break;
            case 1:
                colour = 'rgba(233,30,99,0.8)';
                break;
        }

        return (
            <g>
                <circle fill={colour} r="20" onClick={toggleNode}/>
                <text fill="black" strokeWidth="1" x="30">
                    {nodeDatum.name}
                </text>
                {nodeDatum.attributes?.value ? (
                    <text fill="gray" stroke="gray" x="30" dy="20" strokeWidth="1">
                        Value: {nodeDatum.attributes?.value}
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
            console.log('submit')
            this.setState(prevState => {return({...prevState, treeData: tree})})
        })
    }

    render() {
        return (
            <div>
                <Row style={{height: '85vh'}}>
                    <Col md={11} className='m-a-auto'>
                        <Card className='capture-node' style={{height: '100%'}}>
                            <CardHeader>
                                <Form onSubmit={this.handleSubmit()} style={{display: 'flex', alignContent: 'flex-start'}}>
                                    <FormGroup className='p-t-md p-r-sm p-l'>
                                        <Input type="number" name="msisdn" id="msisdn" placeholder="MSISDN/empty"/>
                                    </FormGroup>
                                    <FormGroup className='p-t-md'>
                                        <Input type="month" name="endDate" id="endDate"
                                               max={this.state.thisMonth.toString()}
                                               placeholder="20yy-MM"
                                               defaultValue={this.state.thisMonth.toString()}
                                               pattern="20[0-9]{2}-[0-1][0-9]"/>
                                    </FormGroup>
                                    <FormGroup className='p-t-md'>
                                        <Button color='info' outline>
                                            <i className="fa fa-chevron-right"/> Submit
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardHeader>
                            <CardBody>
                                {this.state.treeData ?
                                    (<Tree data={this.state.treeData} translate={{x: '200', y: '330'}} zoom='0.6'
                                                              initialDepth='7'
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
