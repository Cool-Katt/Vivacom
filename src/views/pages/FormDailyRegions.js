import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Row, Card, CardBody} from 'reactstrap';
import selectRegionComponent from '../../vibe/helpers/handleSelectRegionField'
import Redirect from "react-router-dom/Redirect";
import PageAlertContext from "../../vibe/components/PageAlert/PageAlertContext";
import SelectComponent from "../../vibe/helpers/handleSelectKQIField";


export default class FormsDailyRegion extends Component {
    constructor() {
        super();
        let today = new Date().toISOString().split("T")[0];
        //TODO: set min date for startDate after checking the db
        this.state = {
            today,
            redirectFlag: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <Row>
            <Col md={{size: 8, offset: 2}}>
            <Card>
            <CardBody>
                <PageAlertContext.Consumer>
                {context => (
                    <Form onSubmit={this.handleSubmit(context)}>
                        <legend>Query selection:</legend>
                        <FormGroup>
                            <Label for="name">Regions</Label>
                            {selectRegionComponent()}
                        </FormGroup>
                        <FormGroup>
                             <Label for="name">Start Date</Label>
                             <Input type="date" name="startDate" id="startDate" required
                                    max={this.state.today.toString()}/>
                        </FormGroup>
                        <FormGroup>
                             <Label for="name">End Date</Label>
                             <Input type="date" name="endDate" id="endDate"
                                    max={this.state.today.toString()}/>
                        </FormGroup>
                        <legend>KQIs</legend>
                        <FormGroup>
                            <Label for="exampleSelect">Select KQIs to query</Label>
                            <SelectComponent />
                        </FormGroup>
                        <Button>Submit</Button>
                        {this.state.redirect ? <Redirect to="/home"/> : ''}
                    </Form>
                    )
                }
                </PageAlertContext.Consumer>
            </CardBody>
            </Card>
            </Col>
            </Row>
        )
    }

    handleSubmit(context) {
        return (e => {
            e.preventDefault();
            let formData = new FormData(e.currentTarget);

            let data = {
                region: formData.get('region'),
                startDate: formData.get('startDate'),
                endDate: formData.get('endDate'),
                kqis: formData.getAll('kqi'),
                type: 'daily-region'

            }

            if (formData.getAll('kqi')[0] === '') {
                context.setAlert('⚠️ Please select at least one KQI!', 'warning')
            } else if(!formData.get('region')) {
                context.setAlert('⚠️ Please select a Region!', 'warning')
            } else {
                console.log(data);
                this.setState({redirect: true});
            }
        })
    }
}