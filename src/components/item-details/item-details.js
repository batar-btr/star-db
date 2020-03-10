import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return
    }
    this.swapiService.getPerson(itemId)
      .then(item => this.setState({ item, loading: false }))
  }

  componentDidMount() {
    this.updateItem()
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true })
      this.updateItem()
    }
  }

  render() {
    const { loading } = this.state;
    if (!this.state.item) {
    return <div className="item-details card">{loading ? <Spinner/> : <span>Select a Person from a list</span>}</div>
    }

    

    const content = loading ? <Spinner /> : <ItemDetailsView item={this.state.item} />
    return (
      <div className="item-details card">
        {content}
      </div>
    )
  }
}

const ItemDetailsView = ({ item }) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (<React.Fragment>
    <img className="item-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='character' />

    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year</span>
          <span>{birthYear}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye Color</span>
          <span>{eyeColor}</span>
        </li>
      </ul>
      <ErrorButton/>
    </div>
  </React.Fragment>)
}