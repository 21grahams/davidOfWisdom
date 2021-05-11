import React from 'react';
import Map from './Map.jsx'
import Axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    this.getAllData = this.getAllData.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    axios.get('/dad')
      .then(res => {
        this.setState({
          data: res.data
        })
      .catch(err => console.log('ERROR WITH DATA FETCH: ', err))
      })
  }

  render() {
    console.log('making it here?')
    return (
      <div>
        <Map data={this.state.data}/>
      </div>
    )
  }
}

export default App;