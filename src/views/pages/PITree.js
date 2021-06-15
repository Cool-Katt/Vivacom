import React, {Component} from 'react';
import {Card, CardBody, CardFooter, Button, Row, Col, CardHeader, Form, FormGroup, Input} from 'reactstrap';
import {tree} from '../../KQICategorizedList'
import Tree from 'react-d3-tree'
import TreeLegend from "../../vibe/components/PITree/TreeLegend";

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
        let colour = 'rgba(153,102,255,0.8)';

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
            default:
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

            let formData = new FormData(e.currentTarget);
            let data = {
                msisdn: formData.get('msisdn'),
                date: formData.get('date'),
            }
            console.log(data)
            //TODO: Handle data requests to the API for tree. Talk to Stef

            this.setState(prevState => {return({...prevState, treeData: tree})})
        })
    }

    render() {
        return (
            <div>
                <Row style={{height: '83vh'}}>
                    <Col md={11} className='m-a-auto'>
                        <Card className='capture-node' style={{height: '100%'}}>
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
                                        <Button color='info' outline>
                                            <i className='fa fa-search'/>
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
