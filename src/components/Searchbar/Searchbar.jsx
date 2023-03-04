import { Component } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export default class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  startSearch = e => {
    e.preventDefault();

    this.props.onSearch(this.state.searchRequest);
    this.setState({ searchRequest: '' });
  };

  changeHandler = e => {
    this.setState({ searchRequest: e.target.value });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.startSearch}>
          <SearchFormButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchRequest}
            onChange={this.changeHandler}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
