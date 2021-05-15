import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
    this.addPost = this.addPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addPost() {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.state);
    this.setState({description: ''});
  }

  render() {
    return (
      <div>
        <input
          className='PostDescription'
          name='description'
          placeholder='Add Description...'
          value={this.state.description}
          onChange={this.addPost}
        >
        </input>

        <button
          onClick={this.handleSubmit}>New Slang</button>
      </div>
    )
  }
}

export default Form;