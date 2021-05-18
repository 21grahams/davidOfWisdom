import React from "react";
import Map from "./Map.jsx";
import axios from "axios";
import ModalHome from "./ModalHome.jsx";
import { Button, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      showModalState: false,
    };
    this.renderButton = this.renderButton.bind(this);
    this.addPost = this.addPost.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  renderButton() {
    axios
      .get("/dad")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log("ERROR WITH DATA FETCH: ", err));
  }

  addPost(saying) {
    axios
      .post("/dad", saying)
      .then((res) => console.log("Successful Post! ", res))
      .catch((err) => console.log("Error with post: ", err));
  }

  showModal() {
    this.setState({
      showModalState: !this.state.showModalState,
    });
  }

  render() {
    return (
      <div>
        <Button
          className="GetFed"
          onClick={this.renderButton}
        >
          Get Fed
        </Button>

        <Map data={this.state.data} />

        <Button
          className="addNewSlang"
          variant="primary"
          onClick={this.showModal}
        >
          Add New Slang
        </Button>

        <ModalHome
          addNewPost={this.addPost}
          show={this.state.showModalState}
          onHide={this.showModal}
        />
      </div>
    );
  }
}

export default App;
