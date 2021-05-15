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
    this.renderButton = this.renderButton.bind(this);
    this.addPost = this.addPost.bind(this);
  }

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
    axios.post('/dad', saying)
    .then(res => console.log('Successful Post! ', res))
    .catch(err => console.log('Error with post: ', err))
  }

  render() {
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