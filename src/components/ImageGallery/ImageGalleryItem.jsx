import { GalleryItem, GalleryItemImage } from './ImageGallery.styled';

export default function ImageGalleryItem({ images, click }) {
  return images.map(image => (
    <GalleryItem id={image.id} key={image.id} onClick={click}>
      <GalleryItemImage src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
  ));
}
