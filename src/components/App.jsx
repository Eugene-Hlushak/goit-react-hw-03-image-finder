import { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchRequest: '',
  };

  getImg = searchRequest => this.setState({ searchRequest });

  render() {
    return (
      <AppContainer>
        <Searchbar onSearch={this.getImg} />
        <ImageGallery request={this.state.searchRequest} />
      </AppContainer>
    );
  }
}
