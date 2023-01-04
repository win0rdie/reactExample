import { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    // //close modal
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  //close Escape
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("touhc ESC , need close modal");

      this.props.onClose();
    }
  };

  //close backdrop
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
