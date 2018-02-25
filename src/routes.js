import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { App } from './containers';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Col className="header text-right" xs={12} sm={12} md={12}>
      <Row>
        <Col xs={12}>
          <h5>Counter</h5>
        </Col>
      </Row>
    </Col>
  )
}

const Footer = () => {
  return (
    <Col className="footer text-right" xs={12} sm={12} md={12}>
      <Row>
        <Col xs={12}>
          <h5>SSR</h5>
        </Col>
      </Row>
    </Col>
  )
}

const checkAuth = () => {
  return true
}

const PublicRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render = { props =>{
    return checkAuth() ? (
      <div>
        <Header {...props} />
        <Component {...props}/>
        <Footer {...props} />
      </div>
    ) : (
      <Redirect to={{ pathname: `/`}} />
    )
  }}/>
)

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render = { props =>{
    return checkAuth() ? (
      <div>
        <Component {...props}/>
      </div>
    ) : (
      <Redirect to={{ pathname: `/home`}} />
    )
  }}/>
)
const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute exact path='/' component={App} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
