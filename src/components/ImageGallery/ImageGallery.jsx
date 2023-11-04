import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.imageContainer}>
      {images !== null &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            smallImgURL={image.webformatURL}
            id={image.id}
            onClick={openModal}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        ))}
    </ul>
  );
};
export default ImageGallery;
