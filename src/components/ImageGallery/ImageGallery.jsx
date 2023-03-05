import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';

export default function ImageGallery({ photos }) {
  return (
    <GalleryList>
      {photos.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            imgId={id}
            url={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};
