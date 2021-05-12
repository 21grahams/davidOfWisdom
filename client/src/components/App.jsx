import React from 'react';
import Map from './Map.jsx'
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    // this.getAllData = this.getAllData.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  // componentDidMount() {
  //   this.getAllData();
  // }

  // getAllData() {
  //   axios.get('/dad')
  //     .then(res => {
  //       this.setState({
  //         data: res.data
  //       })
  //     })
  //     .catch(err => console.log('ERROR WITH DATA FETCH: ', err))
  // }

  renderButton() {
    axios.get('/dad')
    .then(res => {
      this.setState({
        data: res.data
      })
    })
    .catch(err => console.log('ERROR WITH DATA FETCH: ', err))
  }

  render() {
    console.log('making it here?')
    return (
      <div>
        <Map data={this.state.data}/>
        <button onClick={this.renderButton}>More Wisdom</button>
      </div>
    )
  }
}

export default App;