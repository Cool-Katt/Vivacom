import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Card, CardBody, CardFooter, Button, Row, Col, CardHeader} from 'reactstrap';
import {tree} from '../../KQICategorizedList'
import Tree from 'react-d3-tree'

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
        this.state = {
          treeData: tree,
        };
    }

    renderRectSvgNode = ({nodeDatum, toggleNode}) => {
        let colour = 'rgb(153, 102, 255, 0.8)';

        switch (nodeDatum.attributes?.value) {
            case 5:
                colour = 'rgb(68, 159, 238, 0.8)';
                break;
            case 4:
                colour = 'rgb(34, 182, 110, 0.8)';
                break;
            case 3:
                colour = 'rgb(255, 230, 0, 0.8)';
                break;
            case 2:
                colour = 'rgb(255, 159, 64, 0.8)';
                break;
            case 1:
                colour = 'rgba(233, 30, 99, 0.8)';
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

    render() {
        return (
            <div>
                <Row style={{height: '85vh'}}>
                    <Col md={11} className='m-a-auto'>
                        <Card className='capture-node' style={{height: '100%'}}>
                            <CardHeader> PI </CardHeader>
                            <CardBody>
                                <Tree data={this.state.treeData} translate={{x: '200', y: '330'}} zoom='0.6' initialDepth='6'
                                      enableLegacyTransitions={true}
                                      renderCustomNodeElement={this.renderRectSvgNode}
                                />
                            </CardBody>
                            <CardFooter>
                                <Button color='danger' outline>Don't click</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PITree;
