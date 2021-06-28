import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import msisdnFeature from '../../assets/images/sim-card-svgrepo-com.svg';
import areaFeature from '../../assets/images/planet-earth-svgrepo-com.svg';
import networkFeature from '../../assets/images/server-svgrepo-com.svg';
import treeFeature from '../../assets/images/sprout-tree-svgrepo-com.svg';
import underConstructionFeature from '../../assets/images/construction-svgrepo-com.svg';
import {Card, CardBody, CardFooter, Button, Row, Col} from 'reactstrap';

class Dashboard extends Component {

    render() {
        const heroStyles = {
            padding: '50px 0 70px'
        };

        return (
            <div>
                <Row>
                    <Col md={6}>
                        <div className="home-hero" style={heroStyles}>
                            <h1>Welcome to Vibe.</h1>
                            <p className="text-muted">
                                This is a work in progress tool and it's goal is to help manage and query KQIs and PIs.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardBody className="display-flex">
                                <img
                                    src={networkFeature}
                                    style={{width: 70, height: 70}}
                                    alt="Network"
                                    aria-hidden={true}
                                />
                                <div className="m-l">
                                    <h2 className="h4">Network-wide check</h2>
                                    <p className="text-muted">
                                        Run a query for selected KQIs on Network level.
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <NavLink to="/network/daily">
                                    <Button color="primary" outline><i
                                        className="fa fa-calendar"/> Daily</Button>
                                </NavLink>
                                <NavLink to="/network/monthly">
                                    <Button color="info" outline><i
                                        className="fa fa-calendar-o"/> Monthly</Button>
                                </NavLink>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardBody className="display-flex">
                                <img
                                    src={areaFeature}
                                    style={{width: 70, height: 70}}
                                    alt="Region"
                                    aria-hidden={true}
                                />
                                <div className="m-l">
                                    <h2 className="h4">Check by region</h2>
                                    <p className="text-muted">
                                        Run a query for selected daily or monthly KQIs by region.
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <NavLink to="/region/daily">
                                    <Button color="primary" outline><i
                                        className="fa fa-calendar"/> Daily</Button>
                                </NavLink>
                                <NavLink to="/region/monthly">
                                    <Button color="info" outline><i
                                        className="fa fa-calendar-o"/> Monthly</Button>
                                </NavLink>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} >
                        <Card>
                            <CardBody className="display-flex">
                                <img
                                    src={msisdnFeature}
                                    style={{width: 70, height: 70}}
                                    alt="msisdn"
                                    aria-hidden={true}
                                />
                                <div className="m-l">
                                    <h2 className="h4">Check by MSISDN</h2>
                                    <p className="text-muted">
                                        Run a query for selected daily or monthly KQIs by MSISDN.
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <NavLink to="/msisdn/daily">
                                    <Button color="primary" outline><i
                                        className="fa fa-calendar"/> Daily</Button>
                                </NavLink>
                                <NavLink to="/msisdn/monthly">
                                    <Button color="info" outline><i
                                        className="fa fa-calendar-o"/> Monthly</Button>
                                </NavLink>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardBody className="display-flex">
                                <img
                                    src={treeFeature}
                                    style={{width: 70, height: 70}}
                                    alt="tree"
                                    aria-hidden={true}
                                />
                                <div className="m-l">
                                    <h2 className="h4">Check PI Tree</h2>
                                    <p className="text-muted">
                                        See PIs in a hierarchical structure for a specific MSISDN or whole network.
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <NavLink to="/tree">
                                    <Button color="primary" outline><i
                                        className="fa fa-search"/> Query</Button>
                                </NavLink>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card color={"transparent"}>
                            <CardBody className="display-flex">
                                <img
                                    src={underConstructionFeature}
                                    style={{width: 70, height: 70}}
                                    alt="Under construction"
                                    aria-hidden={true}
                                />
                                <div className="m-l">
                                    <h2 className="h4">Under construction</h2>
                                    <p className="text-muted">
                                        This section is still under construction. Come back later. <br/>🥤🌮
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
