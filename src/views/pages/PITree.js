import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Card, CardBody, CardFooter, Button, Row, Col, CardHeader} from 'reactstrap';
import {tree} from '../../KQICategorizedList'
import Tree from 'react-d3-tree'

class PITree extends Component {
    render() {
        return (
            <div>
                <Row style={{ height: '80vh' }}>

                                <Tree data={tree} translate={{x: '150', y: '270'}} zoom='0.69' initialDepth='1' enableLegacyTransitions={true}/>

                </Row>
            </div>
        );
    }
}

export default PITree;
