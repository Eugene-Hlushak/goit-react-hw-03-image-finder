import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ imgUrl, imgAlt, clickOnBackdrop }) {
  return createPortal(
    <Overlay onClick={clickOnBackdrop}>
      <ModalWindow>
        <img src={imgUrl} alt={imgAlt} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  clickOnBackdrop: PropTypes.func.isRequired,
};
