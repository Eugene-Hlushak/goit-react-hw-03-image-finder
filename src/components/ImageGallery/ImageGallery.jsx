import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { GalleryList } from './ImageGallery.styled';
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
    if (prevProps.request !== this.props.request) {
      this.setState({ images: [], page: 1 });
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
    this.setState({
      showModal: true,
    });
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
    this.setState({ showModal: false });
  };

  render() {
    const { loading, images, showModal, modalImg } = this.state;
    return (
      <>
        <GalleryList>
          {images.length > 0 && (
            <ImageGalleryItem images={images} click={this.clickOnImage} />
          )}

          {showModal && (
            <Modal
              imgUrl={modalImg.largeImageURL}
              imgAlt={modalImg.tags}
              closeModal={this.closeModal}
            />
          )}
        </GalleryList>
        {loading && <Loader />}
        {images.length > 0 && <LoadMoreBtn showMoreImgs={this.loadMoreImg} />}
      </>
    );
  }
}
