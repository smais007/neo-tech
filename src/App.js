import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./index.css";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // Sorting state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://neo-tech-server.vercel.app/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(setSelectedCategory);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    console.log(setSelectedCategory);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value); // Update sort order
  };

  const sortProducts = (products, sortOrder) => {
    if (sortOrder === "highToLow") {
      return products.sort(
        (a, b) => parseInt(b.newPrice) - parseInt(a.newPrice)
      );
    }
    if (sortOrder === "lowToHigh") {
      return products.sort(
        (a, b) => parseInt(a.newPrice) - parseInt(b.newPrice)
      );
    }
    return products;
  };

  function filteredData(products, selected, query, sortOrder) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // Apply sorting
    filteredProducts = sortProducts(filteredProducts, sortOrder);

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query, sortOrder); // Ensure sortOrder is passed here

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended
        handleClick={handleClick}
        handleSortChange={handleSortChange}
      />
      <Products result={result} />
    </>
  );
}

export default App;
