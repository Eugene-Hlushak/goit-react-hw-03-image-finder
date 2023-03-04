import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    imgUrl: '',
    imgAlt: '',
  };

  closeModal = e => {
    console.log(e.target);
  };
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.props.closeModal}>
        <div className={css.Modal}>
          <img src={this.props.imgUrl} alt={this.props.imgAlt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
