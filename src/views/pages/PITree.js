import React, {Component} from 'react';
import {Card, CardBody, CardFooter, Button, Row, Col, CardHeader, Form, FormGroup, Input} from 'reactstrap';
import {tree} from '../../KQICategorizedList';
import Tree from 'react-d3-tree';
import TreeLegend from "../../vibe/components/PITree/TreeLegend";
import downloadSvg, {downloadPng} from "svg-crowbar";
import {Loader} from "../../vibe";

class PITree extends Component {
    constructor(props) {
        super(props);
        let thisMonth = new Date();
        thisMonth.setMonth(thisMonth.getMonth() - 1);
        thisMonth = thisMonth.toISOString().split("T")[0].slice(0, 7);
        this.state = {
            thisMonth,
            buttonDisabled: false,
            //treeData: tree,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        <tspan x="30" dy="20">Weight: {nodeDatum.attributes?.weight}</tspan>
                    </text>
                ) : (
                    <text fill="gray" stroke="gray" x="30" dy="20" strokeWidth="1">
                        Value: no data!
                    </text>
                )}
            </g>
        )
    };

    toggleButton = (buttonState) => {
        let submitButton = document.querySelector('.submitButton');
        if (buttonState === 'disabled') {
            submitButton.setAttribute('disabled', 'true');
            this.setState(prevState => {return {...prevState, buttonDisabled: !prevState.buttonDisabled}});
        } else if (buttonState === 'enabled') {
            submitButton.removeAttribute('disabled');
            this.setState(prevState => {return {...prevState, buttonDisabled: !prevState.buttonDisabled}});
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = {
            msisdn: formData.get('msisdn'),
            dateStart: formData.get('date'),
        }
        console.log(data)
        this.toggleButton('disabled')
        //TODO: Handle data requests to the API for tree. Talk to Stef
        fetch('http://panoramamed/API_KQI_PI/userPi/monthly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data}),
        })
            .then(response => response.json())
            .then(r => this.setState({treeData: JSON.parse(r)}))
            .then(()=> this.toggleButton('enabled'))
            .catch(err => {
                console.log(err);
                this.setState({treeData: null});
                this.toggleButton('enabled');
            });
    }

    render() {
        console.log(this.state.treeData)
        return (
            <div>
                <Row style={{height: '83vh'}}>
                    <Col md={11} className='m-a-auto'>
                        <Card style={{height: '100%'}}>
                            <CardHeader>
                                <Form onSubmit={this.handleSubmit}
                                      style={{display: 'flex', alignContent: 'flex-start'}}>
                                    <FormGroup className='p-t-md p-r-sm p-l'>
                                        <Input type="number" name="msisdn" id="msisdn" placeholder="MSISDN" required/>
                                    </FormGroup>
                                    <FormGroup className='p-t-md'>
                                        <Input type="month" name="date" id="endDate"
                                               max={this.state.thisMonth.toString()}
                                               placeholder="20yy-MM"
                                               defaultValue={this.state.thisMonth.toString()}
                                               pattern="20[0-9]{2}-[0-1][0-9]"/>
                                    </FormGroup>
                                    <FormGroup className='p-t-md'>
                                        <Button className='submitButton' color='primary' outline>
                                            {this.state.buttonDisabled ?
                                                <Loader type='spin' small/> :
                                                <i className='fa fa-search'/>
                                            }
                                        </Button>
                                        <Button color='info' outline onClick={e => {
                                            e.preventDefault();
                                            let svg = document.querySelector('.rd3t-svg');
                                            downloadSvg(svg, 'PITreeAsSVG', {css: 'internal'});
                                        }}>
                                            <i className='fa fa-save'/>
                                            &nbsp;Save As SVG
                                        </Button>
                                        <Button color='success' outline onClick={e => {
                                            e.preventDefault();
                                            let svg = document.querySelector('.rd3t-svg');
                                            downloadPng(svg, 'PITreeASPNG', {css: 'internal'});
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
                                           separation={{nonSiblings: 1, siblings: 0.5}}
                                           depthFactor='400'
                                           enableLegacyTransitions={true}
                                           renderCustomNodeElement={this.renderSvgNode}/>)
                                    : (<legend className='m-a-auto p-a-xxl'>Nothing to see here yet.<br />Go ahead and make a new query.</legend>)
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
