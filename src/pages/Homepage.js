import React, { useEffect, useState } from "react";
import "../App.css";
import Schoollogo from "../images/Schoollogo.png";
import Button from "../Components/Button/button";
import Card from "../Components/cart";
import Categories from "../Components/categories";
import Footer from "../Components/footer";
import Modal from "../Components/modal";
import { formatDate } from "../utilities/helper";
const HomePage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const fetchCategories = async () => {
    try {
      const categories = await fetch("http://localhost:1337/api/category-school-lists");
      const { data } = await categories.json();
      const categoriesName = data.map((val) => val.name);
      setCategoryData(categoriesName);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async (pageNumber = 1) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:1337/api/products-carts?populate=*");
      const { data } = await response.json();
      const products = data.map((item) => ({
        id: item.id,
        title: item.name,
        date: formatDate(item.date),
        image: item.images[0]?.formats.small.url || "",
        category: item.category_school_list?.name || "Uncategorized",
      }));
      setProductsData(products);      
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts(page);
  }, [page]);

  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter((product) => product.category === selectedCategory);

  const limitedProducts = filteredProducts.slice(0, displayCount);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleCardClick = (event, index) => {
    setSelectedEvent(event);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredProducts.length;
    setCurrentIndex(nextIndex);
    setSelectedEvent(filteredProducts[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setCurrentIndex(prevIndex);
    setSelectedEvent(filteredProducts[prevIndex]);
  };

  const isNextDisabled = currentIndex === filteredProducts.length - 1;
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="homepage">
      <header className="header">
        <div className="schoollogo">
          <img src={Schoollogo} alt="Logo" />
        </div>
        <nav className="navbar poppins-regular">
          <a href="#school">The School</a>
          <a href="#academics">Academics</a>
          <a href="#life">Life @ DBTR</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="header-buttons">
          <Button label="CSR" styleType="outline" />
          <Button label="Donate ❤" styleType="solid" />
        </div>
      </header>
      <header className="hero">
        <div className="hero-content">
          <h1>Our events gallery</h1>
          <p className="poppins-regular">
            Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together.
          </p>
        </div>
      </header>

      <Categories
        categories={categoryData}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />

      <section className="events">
        <div className="cards-container">
          {limitedProducts.map((event, index) => (
            <Card
              key={index}
              image={`http://localhost:1337${event.image}`}
              title={event.title}
              date={event.date}
              onClick={() => handleCardClick(event, index)} // Pass index here
            />
          ))}
        </div>
        {displayCount < filteredProducts.length && (
          <Button
            className="view-more"
            label={isLoading ? "Loading..." : "View More"}
            styleType="viewmore"
            onClick={handleViewMore}
          />
        )}
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />

      <Footer />
    </div>
  );
};

export default HomePage;
