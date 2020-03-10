import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>);
}

export {
  Record
}

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: false
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return
    }
    this.setState({ loading: true })

    getData(itemId)
      .then(item => this.setState({ item, loading: false, image: getImgUrl(item) }))
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
      return <div className="item-details card">{loading ? <Spinner /> : <span>Select a Person from a list</span>}</div>
    }



    const content = loading ? <Spinner /> : <ItemDetailsView item={this.state.item} image={this.state.image} elems={this.props.children} />
    return (
      <div className="item-details card">
        {content}
      </div>
    )
  }
}

const ItemDetailsView = ({ item, image, elems }) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (<React.Fragment>
    <img className="item-image" src={image} alt='character' />

    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
  {React.Children.map(elems, elem => React.cloneElement(elem, {item}))}
      </ul>
      <ErrorButton />
    </div>
  </React.Fragment>)
}