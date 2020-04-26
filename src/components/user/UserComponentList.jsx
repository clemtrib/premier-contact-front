import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'
import { GET_USERS } from './queries'

export default class UserComponentList extends React.Component {
    render() {
        return (
            <Query pollInterval={500} query={GET_USERS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div className="usersList">
                            <Table striped size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Nom de famille</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>
                                                <Link to={`/user/show/${user._id}`}>
                                                    {user.email}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Button href="/user/create">Ajouter</Button>
                        </div>
                    );
                }}
            </Query>
        );
    }
}