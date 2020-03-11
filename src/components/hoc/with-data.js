import React, { Component } from 'react'
import Spinner from '../spinner'

const withData = (ViewComponent, getData) => class extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        getData()
            .then(data => this.setState({ data }))
    }
    render() {
        const { data } = this.state
        if (!data) {
            return <Spinner />
        }
        return (
            <ViewComponent {...this.props} data={data} />
        );
    }
}

export default withData;