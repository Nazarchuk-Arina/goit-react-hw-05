import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import LoadMore from "./LoadMore/LoadMore";
import "/main.css";
import axios from "axios";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, seIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const perPage = 10;

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setIsLoading(true);
      try {
        seIsError(false);
        const { results, total } = await fetchImages(query, page, perPage);
        setImages((prev) => [...prev, ...results]);
        setIsVisible(page * perPage < total);
        setIsEmpty(results.length === 0);
      } catch (error) {
        seIsError(true);
        setIsVisible(false);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
    seIsError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoad = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      {isEmpty && query && !isLoading && (
        <div>No images found. Try a different search.</div>
      )}
      {page === 1 && isLoading && <Loader />}
      {images.length > 0 ? (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {isLoading && <Loader />}
          {isVisible && !isLoading && <LoadMore onLoad={handleLoad} />}
        </>
      ) : (
        <>{isError && <ErrorMessage />}</>
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
