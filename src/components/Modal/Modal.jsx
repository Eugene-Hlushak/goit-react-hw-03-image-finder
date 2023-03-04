import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    hidden: true,
    imgUrl: '',
    imgAlt: '',
  };

  componentDidMount() {
    console.log('Open Modal');
  }

  componentWillUnmount() {
    console.log('Close Modal');
  }

  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
