import React, {Component} from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default class BreadcrumbMenu extends Component{
    render(){
        return (
            <Breadcrumb bg="secondary">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                
                <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}