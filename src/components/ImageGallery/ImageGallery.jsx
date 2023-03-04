import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem';

import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import css from './ImageGallery.module.css';
import { getImages } from 'js/fetchImg';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    showModal: false,
    modalImg: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.request !== this.props.request ||
      prevState.page !== this.state.page
    ) {
      this.getPhotos(this.props.request, this.state.page);
    }
  }

  getPhotos = async (search, searchPage) => {
    this.setState({ loading: true });
    try {
      const {
        data: { hits },
      } = await getImages(search, searchPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  clickOnImage = e => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
    this.setState({
      modalImg: this.state.images.find(
        img => img.id === Number(e.target.parentNode.id)
      ),
    });
  };

  loadMoreImg = () => {
    this.setState(prev => this.setState({ page: prev.page + 1 }));
  };

  closeModal = e => {
    console.log(e.target);
    this.setState({ showModal: false });
  };

  render() {
    const { loading, images, showModal, modalImg } = this.state;
    return (
      <ul className={css.ImageGallery}>
        {loading && <Loader />}
        {images.length > 0 && (
          <>
            <ImageGalleryItem images={images} click={this.clickOnImage} />
            <LoadMoreBtn showMoreImgs={this.loadMoreImg} />
          </>
        )}

        {showModal && (
          <Modal
            imgUrl={modalImg.largeImageURL}
            imgAlt={modalImg.tags}
            closeModal={this.closeModal}
          />
        )}
      </ul>
    );
  }
}
