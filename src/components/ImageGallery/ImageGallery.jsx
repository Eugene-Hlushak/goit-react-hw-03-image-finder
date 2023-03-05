import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { GalleryList } from './ImageGallery.styled';
import * as api from 'api/fetchImg';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    loading: false,
    btnVisible: false,
    showModal: false,
    modalImg: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.request !== this.props.request) {
      this.setState({ images: [], page: 1, btnVisible: false });
    }
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
      const { data } = await api.getImages(search, searchPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        btnVisible: this.state.page < Math.ceil(data.totalHits / api.per_page),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  clickOnImage = e => {
    this.setState({
      showModal: true,
    });
    this.setState({
      modalImg: this.state.images.find(
        ({ id }) => id === Number(e.target.parentNode.id)
      ),
    });
  };

  loadMoreImg = () => {
    this.setState(prev => this.setState({ page: prev.page + 1 }));
  };

  closeModal = e => {
    this.setState({ showModal: false });
  };

  render() {
    const { loading, btnVisible, images, showModal, modalImg } = this.state;
    return (
      <>
        <GalleryList>
          {images.length > 0 && (
            <ImageGalleryItem images={images} click={this.clickOnImage} />
          )}
        </GalleryList>
        {showModal && (
          <Modal
            imgUrl={modalImg.largeImageURL}
            imgAlt={modalImg.tags}
            closeModal={this.closeModal}
          />
        )}
        {loading && <Loader />}
        {btnVisible && <LoadMoreBtn showMoreImgs={this.loadMoreImg} />}
      </>
    );
  }
}
