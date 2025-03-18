import "./index.css";

const ThumbnailItem = ({ imageItem, getImageId }) => {
  const { id, thumbnailUrl, thumbnailAltText } = imageItem;

  return (
    <li className="thumb-item">
      <button
        type="button"
        className="thumb-btn"
        onClick={() => getImageId(id)}
        aria-label={`Select image ${thumbnailAltText}`}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumb-img" />
      </button>
    </li>
  );
};

export default ThumbnailItem;
