import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Row, Card, CardBody} from 'reactstrap';
import Redirect from "react-router-dom/Redirect";
import PageAlertContext from "../../vibe/components/PageAlert/PageAlertContext";
import SelectComponent from "../../vibe/helpers/handleSelectKQIField";
import SelectRegionComponent from "../../vibe/helpers/handleSelectRegionField";


export default class FormMonthlyRegion extends Component {
    constructor(props) {
        super(props);
        this.selectRef = React.createRef();
        let thisMonth = new Date();
        thisMonth.setMonth(thisMonth.getMonth() - 1);
        thisMonth = thisMonth.toISOString().split("T")[0].slice(0, 7);
        //TODO: set min date for startDate after checking the db
        this.state = {
            thisMonth,
            redirectFlag: false,
            type: 'monthly-region',
            prevQuery: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);

        if (!props.location.state) {
            props.location.state = {}
        }
    }

    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem(this.state.type));
        this.setState(prevState => {return {...prevState, nomAndDenom: data?.nomAndDenom, prevQuery: data}})
    }

    render() {
        return (
            <Row>
            <Col md={{size: 8, offset: 2}}>
            <Card>
            <CardBody>
                <PageAlertContext.Consumer>
                {context => (
                    <Form onSubmit={this.handleSubmit(context, this.props)}>
                        <legend>Query selection:</legend>
                        <FormGroup>
                            <Label for="name">Regions</Label>
                            {/*{SelectRegionComponent(JSON.parse(sessionStorage.getItem(this.state.type)))}*/}
                            <SelectRegionComponent prevQuery={JSON.parse(sessionStorage.getItem(this.state.type))} startDate={this.state.dateForRegion} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Start Month </Label>
                            <Label className='text-danger'>Please select date before region!</Label>
                            <Input type="month" name="startDate" id="startDate" required
                                   max={this.state.thisMonth.toString()}
                                   placeholder="20yy-MM"
                                   defaultValue={this.state.prevQuery?.startDate}
                                   pattern="20[0-9]{2}-[0-1][0-9]"
                                   onChange={e => this.setState({dateForRegion: e.currentTarget.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">End Month </Label>
                            <Input type="month" name="endDate" id="endDate"
                                   max={this.state.thisMonth.toString()}
                                   placeholder="20yy-MM"
                                   defaultValue={this.state.thisMonth.toString()}
                                   pattern="20[0-9]{2}-[0-1][0-9]"/>
                        </FormGroup>
                        <legend>KQIs</legend>
                        <FormGroup>
                            <Label for="exampleSelect">Select KQIs to query</Label>
                            <SelectComponent type={this.state.type} prevSelection={this.state.prevQuery?.kqis}
                                             ref={this.selectRef}/>
                        </FormGroup>
                        <Button>Submit</Button>
                        {this.state.redirect ? <Redirect to={{
                            pathname: '/analytics',
                            state: {data: this.props.location.state.data}
                        }}/> : ''}
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

    handleSubmit(context, props) {
        return (e => {
            e.preventDefault();
            let formData = new FormData(e.currentTarget);

            let data = {
                region: formData.get('region').split(':')[0],
                regionLevel: formData.get('region').split(':')[1],
                startDate: formData.get('startDate'),
                endDate: formData.get('endDate'),
                kqis: formData.getAll('kqi'),
                type: this.state.type,
            }

            if (formData.getAll('kqi')[0] === '') {
                context.setAlert('?????? Please select at least one KQI!', 'warning')
            } else if(!formData.get('region')) {
                context.setAlert('?????? Please select a Region!', 'warning')
            } else {
                context.setAlert('?????? Please wait for data to load. It shouldn\'t take more than a minute.', 'primary')
                props.location.state.data = data;
                //console.log(data);
                let tempData = JSON.parse(JSON.stringify(data));
                tempData.kqis = this.selectRef.current.state.someOptions;
                sessionStorage.setItem(this.state.type, JSON.stringify(tempData));

                this.setState({redirect: true});
            }
        })
    }
}