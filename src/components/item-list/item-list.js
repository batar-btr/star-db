import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }
    componentDidMount() {
        this.swapiService.getAllPeople()
            .then(peopleList => this.setState({ peopleList }))
    }
    onItemSelected = id => console.log(id);

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li
                    className='list-group-item'
                    key={id}
                    onClick = {() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            );
        })
    }

    render() {

        const { peopleList } = this.state
        if (!peopleList) {
            return <Spinner />
        }
        return (
            <ul className="item-list list-group">
                {this.renderItems(peopleList)}
            </ul>
        );
    }
}