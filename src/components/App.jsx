import { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import * as api from 'api/fetchImg';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    btnVisible: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      api
        .getImages(this.state.query, this.state.page)
        .then(({ data }) =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            btnVisible:
              this.state.page < Math.ceil(data.totalHits / api.per_page),
          }))
        )
        .catch(error => console.log(error))
        .finally(this.setState({ loading: false }));
    }
  }

  getSearchQuery = searchRequest =>
    this.setState({ query: searchRequest, page: 1, images: [] });

  loadMoreImg = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, loading, btnVisible } = this.state;
    return (
      <AppContainer>
        <Searchbar onSearch={this.getSearchQuery} />
        {images.length > 0 && <ImageGallery photos={images} />}
        {btnVisible && <LoadMoreBtn showMoreImgs={this.loadMoreImg} />}
        {loading && <Loader />}
      </AppContainer>
    );
  }
}
