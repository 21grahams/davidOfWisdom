import React from 'react';
import Map from './Map.jsx'
import Form from './Form.jsx'
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    // this.getAllData = this.getAllData.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.addPost = this.addPost.bind(this);
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

  addPost(saying) {
    console.log('working!')
  }

  render() {
    console.log('making it here?')
    return (
      <div>
        <button className='GetFed' onClick={this.renderButton}>Get Fed</button>
        <Map data={this.state.data}/>
        <Form addPost={this.addPost}/>
      </div>
    )
  }
}

export default App;