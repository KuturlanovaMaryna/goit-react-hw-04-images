import axios from 'axios';
import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import SearchBar from 'components/Searchbar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Buton/Button';

const App = () => {
  // const URL = 'https://pixabay.com/api/',
  // const API_KEY = '39422970-7b6782b5257085f988eb60a82',
  // state = {

  //   images: null,
  // currentPage: 1,
  //   isLoading: false,

  //   error: null,
  //   input: null,
  //
  //   totalImages: null,
  //   modalImage: null,

  //   isOpen: false,
  //   largeImage: null,
  //   alt: null,
  // };
  const [images, setImages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState(null);
  const [totalImages, setTotalImages] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [alt, setAlt] = useState(null);

  // const fetchImages = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await axios.get(
  //       `https://pixabay.com/api/?q=${input}&page=${currentPage}&key=39422970-7b6782b5257085f988eb60a82&image_type=photo&orientation=horizontal&per_page=12`
  //     );
  //     setImages(
  //       prevState => [...prevState.images, ...data.hits],
  //       setTotalImages(data.totalHits)
  //     );
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    if (!input) {
      return;
    }
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://pixabay.com/api/?q=${input}&page=${currentPage}&key=39422970-7b6782b5257085f988eb60a82&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(
          prevState => [...prevState, ...data.hits],
          setTotalImages(data.totalHits)
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [currentPage, input]);
  // componentDidUpdate(_, prevState) {
  //   if (
  //     this.state.currentPage !== prevState.currentPage ||
  //     this.state.input !== prevState.input
  //   ) {
  //     this.fetchImages();
  //   }
  // }
  const onSubmit = value => {
    setInput(value);
    setImages([]);
    setCurrentPage(1);
    // this.setState({ input: value, images: [], currentPage: 1 }, () => {});
  };

  // const onClick = page => {
  //   setCurrentPage(page);
  // };
  const openModal = ({ largeImageURL, tags }) => {
    setIsOpen(true);
    setLargeImage(largeImageURL);
    setAlt(tags);
    // this.setState({
    //   isOpen: true,
    //   largeImage: largeImageURL,
    //   alt: tags,
    // });
  };

  const closeModal = () => {
    setIsOpen(false);
    setLargeImage(null);
    setAlt(null);
    // this.setState({
    //   isOpen: false,
    //   largeImage: null,
    //   alt: null,
    // });
  };

  const addPage = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <SearchBar onSubmit={onSubmit} />
      </div>
      {isLoading && <Loader />}
      {error !== null && (
        <p className={css.error}>
          Oops, some error occured... Error message: {error}
        </p>
      )}
      <ImageGallery images={images} openModal={openModal} />
      {totalImages > 12 && <Button onClick={addPage} />}
      {isOpen && (
        <Modal currentImg={largeImage} alt={alt} closeModal={closeModal} />
      )}
    </div>
  );
};
export default App;
