import React from 'react'
import { Mutation } from 'react-apollo'
import { Button, Row, Col, Form, FormGroup, Label } from 'reactstrap'
import { ADD_USER } from './queries'

export default class UserDetails extends React.Component {
    render() {
        let firstname, lastname, type, email, phone;
        return (
            <Mutation mutation={ADD_USER} onCompleted={() => this.props.history.push('/user')}>
                {(addUser, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Ajouter un contact
                            </h3>
                            </div>
                            <div className="panel-body">
                                <Form onSubmit={e => {
                                    e.preventDefault();
                                    addUser({
                                        variables: {
                                            firstname: firstname.value,
                                            lastname: lastname.value,
                                            type: type.value,
                                            email: email.value,
                                            phone: phone.value
                                        }
                                    });
                                    firstname.value = "";
                                    lastname.value = "";
                                    type.value = "";
                                    email.value = "";
                                    phone.value = "";
                                }}>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="firstname">Prénom</Label>
                                                <input type="text" className="form-control" name="firstname" ref={node => {
                                                    firstname = node;
                                                }} required="required" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="lastname">Nom de famille</Label>
                                                <input type="text" className="form-control" name="lastname" ref={node => {
                                                    lastname = node;
                                                }} required="required" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="exampleSelect">Status</Label>
                                        <select className="form-control" name="type" ref={node => {
                                            type = node;
                                        }} >
                                            <option>Entrepreneur</option>
                                            <option>Détaillant</option>
                                            <option>Consultant</option>
                                            <option>Stagiaire</option>
                                            <option>Autre</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <input type="email" className="form-control" name="email" ref={node => {
                                            email = node;
                                        }} required="required" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phone">Téléphone</Label>
                                        <input type="text" className="form-control" name="phone" ref={node => {
                                            phone = node;
                                        }} required="required" placeholder="Format : 438 228 6636" />
                                    </FormGroup>
                                    <Button>Enregistrer</Button>
                                </Form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}