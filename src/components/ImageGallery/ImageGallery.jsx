import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => openModal(image)}>
          <ImageCard
            alt_description={image.alt_description}
            urls={image.urls}
            id={image.id}
          />
        </li>
      ))}
    </ul>
  );
}
