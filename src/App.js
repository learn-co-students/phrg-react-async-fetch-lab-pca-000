import React, { Component } from 'react';

export default class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ people: data.people })
      })
  }

  render() {
    return(
      <div>
        {this.state.people.map(p => p.name)}
      </div>
    )
  }
}
