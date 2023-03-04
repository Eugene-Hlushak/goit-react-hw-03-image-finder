import css from './ImageGallery.module.css';

export default function ImageGalleryItem({ images, click }) {
  return images.map(image => (
    <li
      className={css.ImageGalleryItem}
      id={image.id}
      key={image.id}
      onClick={click}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  ));
}
