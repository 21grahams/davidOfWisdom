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
      descriptionError: "",
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
  }

  handlePost() {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let isValid = this.validate();
    if (isValid) {
      this.props.addNewPost(this.state);
      this.setState({ description: "" });
      this.props.onHide();
    }
  }

  showModal() {
    this.setState({
      setModalShow: !this.state.setModalShow,
    });
  }

  reset() {
    this.setState({
      description: "",
      descriptionError: "",
    });
    this.props.onHide();
  }

  validate() {
    let descriptionError = "";

    if (!this.state.description) {
      descriptionError = "Field cannot be blank";
    }
    if (descriptionError) {
      this.setState({
        descriptionError,
      });
      return false;
    }
    return true;
  }

  render() {
    const { addNewPost, ...rest } = this.props;

    return (
      <div>
        <Modal
          {...rest}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Vanilla Thunder's Thoughts
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              className="PostDescription"
              name="description"
              placeholder="Give Me Your Wisdom..."
              value={this.state.description}
              onChange={this.handlePost}
            ></textarea>
            <div style={{ color: "red" }}>{this.state.descriptionError}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Submit</Button>
            <Button variant="secondary" onClick={this.reset}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalHome;
