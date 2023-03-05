import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGallery.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalByEsc);
  }

  openModal = e => {
    this.setState({
      showModal: true,
    });
  };

  closeModalByEsc = e => {
    if (e.code === 'Escape') {
      this.setState({ showModal: false });
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.setState({ showModal: false });
    }
  };

  render() {
    return (
      <GalleryItem id={this.props.imgId}>
        <GalleryItemImage
          src={this.props.url}
          alt={this.props.alt}
          onClick={this.openModal}
        />
        {this.state.showModal && (
          <Modal
            imgUrl={this.props.largeImageURL}
            imgAlt={this.props.alt}
            clickOnBackdrop={this.handleBackdropClick}
          />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  imgId: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
