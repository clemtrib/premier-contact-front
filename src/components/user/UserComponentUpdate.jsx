import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { Button, Row, Col, Form, FormGroup, Label } from 'reactstrap'
import { GET_USER, UPDATE_USER } from './queries'

export default class UserComponentUpdate extends React.Component {
    render() {
        let firstname, lastname, type, email, phone;
        return (
            <Query query={GET_USER} variables={{ userId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <Mutation mutation={UPDATE_USER} key={data.user._id} onCompleted={() => this.props.history.push(`/user`)}>
                            {(updateUser, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-lastname">
                                                Modifier un contact <small> > {data.user.firstname} {data.user.lastname}</small>
                                            </h3>
                                        </div>
                                        <div className="panel-body">
                                            <Form onSubmit={e => {
                                                e.preventDefault();
                                                updateUser({ variables: { id: data.user._id, firstname: firstname.value, lastname: lastname.value, type: type.value, email: email.value, phone: phone.value } });
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
                                                            }} required="required" placeholder="Lastname" defaultValue={data.user.firstname} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <Label for="lastname">Nom de famille</Label>
                                                            <input type="text" className="form-control" name="lastname" ref={node => {
                                                                lastname = node;
                                                            }} required="required" placeholder="Lastname" defaultValue={data.user.lastname} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Status</Label>
                                                    <select className="form-control" name="type" ref={node => {
                                                        type = node;
                                                    }} defaultValue={data.user.type}>
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
                                                    }} required="required" defaultValue={data.user.email} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="phone">Téléphone</Label>
                                                    <input type="text" className="form-control" name="phone" ref={node => {
                                                        phone = node;
                                                    }} required="required" placeholder="Format : 438 228 6636" defaultValue={data.user.phone} />
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
                }}
            </Query>
        );
    }
}


/*



                                        <form onSubmit={e => {
                                            e.preventDefault();
                                            updateUser({ variables: { id: data.user._id, firstname: firstname.value, lastname: lastname.value, type: type.value, email: email.value, phone: phone.value } });
                                            firstname.value = "";
                                            lastname.value = "";
                                            type.value = "";
                                            email.value = "";
                                            phone.value = "";
                                        }}>
                                            <div className="form-group">
                                                <label htmlFor="firstname">firstname:</label>
                                                <input type="text" className="form-control" name="firstname" ref={node => {
                                                    firstname = node;
                                                }} placeholder="firstname" defaultValue={data.user.firstname} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastname">lastname:</label>
                                                <input type="text" className="form-control" name="lastname" ref={node => {
                                                    lastname = node;
                                                }} placeholder="lastname" defaultValue={data.user.lastname} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="type">type:</label>
                                                <input type="text" className="form-control" name="type" ref={node => {
                                                    type = node;
                                                }} placeholder="type" defaultValue={data.user.type} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">email:</label>
                                                <textarea className="form-control" name="email" ref={node => {
                                                    email = node;
                                                }} placeholder="email" cols="80" rows="3" defaultValue={data.user.email} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="type">phone:</label>
                                                <input type="text" className="form-control" name="phone" ref={node => {
                                                    phone = node;
                                                }} placeholder="phone" defaultValue={data.user.phone} />
                                            </div>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </form>

*/