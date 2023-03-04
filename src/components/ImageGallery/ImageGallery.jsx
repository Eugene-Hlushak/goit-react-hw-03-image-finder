import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import css from './ImageGallery.module.css';
import { getImages } from 'js/fetchImg';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: 1,
  };

  clickOnImage = () => console.log('click on image');

  loadMoreImg = () => {
    this.setState(prev => this.setState({ page: prev.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.request !== this.props.request ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      setTimeout(() => {
        getImages(this.props.request, this.state.page)
          .then(res => this.setState({ images: [...res.data.hits] }))
          .finally(this.setState({ loading: false }));
      }, 500);
    }
  }

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.state.loading && <Loader />}
        {this.state.images && (
          <>
            <ImageGalleryItem
              images={this.state.images}
              click={this.clickOnImage}
            />
            <LoadMoreBtn showMoreImgs={this.loadMoreImg} />
          </>
        )}
      </ul>
    );
  }
}
