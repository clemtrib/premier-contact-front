import gql from 'graphql-tag'

const GET_USERS = gql`
  {
    users {
      _id, firstname, lastname, email, created_at, updated_at
    }
  }
`

const GET_USER = gql`
    query user($userId: String) {
        user(id: $userId) {
            _id
            firstname
            lastname
            type
            email
            phone
        }
    }
`

const ADD_USER = gql`
  mutation AddUser(
    $firstname: String!, 
    $lastname: String!, 
    $type: String!, 
    $email: String!, 
    $phone: String!) {
    addUser(
      firstname: $firstname, 
      lastname: $lastname, 
      type: $type, 
      email: $email, 
      phone: $phone) {
        _id,
        created_at,
        updated_at
    }
  }
`

const UPDATE_USER = gql`
    mutation updateUser(
        $id: String!,
        $firstname: String!,
        $lastname: String!,
        $type: String!,
        $email: String!,
        $phone: String!) {
        updateUser(
        id: $id,
        firstname: $firstname,
        lastname: $lastname,
        type: $type,
        email: $email,
        phone: $phone) {
            _id,
            updated_at
        }
    }
`

const DELETE_USER = gql`
  mutation removeUser($id: String!) {
    removeUser(id:$id) {
      _id
    }
  }
`

export { GET_USER, ADD_USER, UPDATE_USER, DELETE_USER, GET_USERS }