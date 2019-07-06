import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import NavMenu from './NavMenu'
import BreadcrumbMenu from './BreadcrumbMenu'
import Content from './Content'

export default class App extends Component {
  render(){
    return (
      <div>
          <Row>
            <Col sm>
              <NavMenu />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <BreadcrumbMenu />
              <Content />
            </Col>
          </Row>
      </div>
    );
  }
}