import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      setModalShow: false,
    };
    this.addPost = this.addPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  addPost() {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.state);
    this.setState({ description: "" });
  }

  showModal() {
    this.setState({
      setModalShow: !this.state.setModalShow,
    });
  }

  render() {
    return (
      <div>

        <Modal
          {...this.props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop='static'
       >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Add Some Thoughts Papa Kirsh</h4>
            <input
          className="PostDescription"
          name="description"
          placeholder="Add Description..."
          value={this.state.description}
          onChange={this.addPost}
        ></input>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.handleSubmit}>Submit</Button>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalHome;
