import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Query, Mutation } from 'react-apollo'
import { GET_USER, DELETE_USER } from './queries'


export default class UserComponentShow extends React.Component {
    render() {
        return (
            <Query pollInterval={500} query={GET_USER} variables={{ userId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container">
                            <div className="panel panel-default">
                                <Card>
                                    <CardBody>
                                        <CardTitle><strong>{data.user.firstname} {data.user.lastname}</strong></CardTitle>
                                        <CardSubtitle><i>{data.user.type}</i></CardSubtitle>
                                    </CardBody>
                                    <img width="100%" src="https://d2homsd77vx6d2.cloudfront.net/cache/c2/31/c231f01891968b16938ffedbc0e74115.png" alt={data.user.id} />
                                    <CardBody>
                                        <CardText>Téléphone : {data.user.phone}</CardText>
                                        <CardText>Email : {data.user.email}</CardText>
                                        <Mutation mutation={DELETE_USER} key={data.user._id} onCompleted={() => this.props.history.push('/user')}>
                                            {(removeUser, { loading, error }) => (
                                                <div>
                                                    <form
                                                        onSubmit={e => {
                                                            e.preventDefault();
                                                            removeUser({ variables: { id: data.user._id } });
                                                        }}>
                                                        <Link to={`/user/update/${data.user._id}`} className="btn btn-success">Modifier</Link>&nbsp;
                                                    <button type="submit" className="btn btn-danger">Supprimer</button>
                                                    </form>
                                                    {loading && <p>Loading...</p>}
                                                    {error && <p>Error :( Please try again</p>}
                                                </div>
                                            )}
                                        </Mutation>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}