import React, {Component} from 'react'
import {Card, Button, CardColumns, ListGroup, Row, Col, Alert}  from 'react-bootstrap'
import first from './../assets/01.jpg'
import second from './../assets/02.jpg'
import third from './../assets/03.jpg'
import fourth from './../assets/04.jpg'
import fifth from './../assets/05.jpg'
import sixth from './../assets/06.jpg'

const data = [
    {
      id: 1,
      name: 'Ohrensessel Josslyn',
      price: 499.99,
      currency: 'EUR',
      image: first,
    },
    {
      id: 2,
      name: 'Sessel Sofie',
      price: 249.99,
      currency: 'EUR',
      image: second,
    },
    {
      id: 4,
      name: 'Schlafsessel Rovigo',
      price: 239.99,
      currency: 'EUR',
      image: fourth,
    },
    {
      id: 6,
      name: 'Sessel Little',
      price: 119.99,
      currency: 'EUR',
      image: sixth,
    },
    {
      id: 5,
      name: 'Sessel Peacock',
      price: 599.99,
      currency: 'EUR',
      image: fifth,
    },
    {
      id: 3,
      name: 'Sessel Anna',
      price: 149.99,
      currency: 'EUR',
      image: third,
    }
  ];
  const variant_val=['','dark'];
  export default class Products extends Component{
    constructor(){
      super();
      this.state = {
        myBag: [],
        total: 0.0,
        btn_state: [],
      }
    }
    onPurchase(e, item){
      let temp = this.state.myBag;
      temp.push(item);
      this.setState({myBag:temp});

      let total = this.state.total;
      total += item.price;
      this.setState({total:total});
      this.state.btn_state[item.id] = !this.state.btn_state[item.id];
    }
    onDelete(e, item) {
      let total = this.state.total;
      total -= item.price;
      this.setState({total:total});

      let temp = this.state.myBag;
      const idx = temp.indexOf(item);
      temp.splice(idx,1);      

      this.state.btn_state[item.id] = !this.state.btn_state[item.id];
      this.setState({btn_state: this.state.btn_state, myBag:temp});
    }
    render(){
      return (
        <Row>
          <Col sm={8}>
            <CardColumns >
              {
                data.map((item)=>(
                  <Card style={{ width: '18rem' }}  className="text-center" >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Title>{item.price}{item.currency}
                      </Card.Title>
                      
                      {!this.state.btn_state[item.id] ? <Button variant="primary" onClick={e => this.onPurchase(e, item)}>Purchase</Button> : <Button variant="danger" onClick={e => this.onDelete(e, item)}>Cancel</Button>}
                    </Card.Body>
                  </Card>
                ))
              }
            </CardColumns>
          </Col>
          <Col sm={3}>
          <ListGroup>
              {
                this.state.myBag.map((item, idx)=>(
                  <ListGroup.Item variant={variant_val[idx % 2]}>
                    <h3>{item.name}</h3>
                    <h5>{item.price}{item.currency}</h5>
                  </ListGroup.Item>
                ))
              }
            
          </ListGroup>
          <hr />
          <Alert variant="success">
            <h3>Total: {this.state.total} EUR</h3>
          </Alert>
          
          </Col>
          
        </Row>
      );
    }
  }
  