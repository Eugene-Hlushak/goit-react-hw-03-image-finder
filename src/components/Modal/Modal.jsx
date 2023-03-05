import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    imgUrl: '',
    imgAlt: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={this.props.imgUrl} alt={this.props.imgAlt} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
