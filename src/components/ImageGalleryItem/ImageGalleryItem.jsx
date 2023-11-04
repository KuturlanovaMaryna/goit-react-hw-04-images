import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  smallImgURL,
  id,
  onClick,
  largeImageURL,
  tags,
}) => {
  return (
    <li className={css.photo}>
      <img
        key={id}
        src={smallImgURL}
        alt={id}
        onClick={() => onClick({ largeImageURL, tags })}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
