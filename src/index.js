import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import UserComponentCover from './components/user/UserComponentCover'
import UserComponentList from './components/user/UserComponentList'
import UserComponentShow from './components/user/UserComponentShow'
import UserComponentCreate from './components/user/UserComponentCreate'
import UserComponentUpdate from './components/user/UserComponentUpdate'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './app.css'

const client = new ApolloClient({ uri: 'http://localhost:8080/graphql' })

ReactDOM.render(
  <div className="root">
    <ApolloProvider client={client}>
      <Router>
        <Row>
          <Col>
            <UserComponentList />
          </Col>
          <Col>
            <Route exact path='/' component={UserComponentCover} />
            <Route exact path='/user' component={UserComponentCover} />
            <Route path='/user/create' component={UserComponentCreate} />
            <Route path='/user/show/:id' component={UserComponentShow} />
            <Route path='/user/update/:id' component={UserComponentUpdate} />
          </Col>
        </Row>
      </Router>
    </ApolloProvider>
  </div>,
  document.getElementById('root')
)