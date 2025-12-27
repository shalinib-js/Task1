import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import ProductList from "../Components/ProductList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      {/* Centered Search + Filter */}
      <div className="container my-4">
        <div className="row justify-content-center g-3">
          
          {/* Search */}
          <div className="col-12 col-md-7">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          {/* Filter */}
          <div className="col-12 col-md-3 d-flex justify-content-md-start">
            <Filter setSelectedCategory={setSelectedCategory} />
          </div>

        </div>
      </div>

      <ProductList
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

    </>
  );
};

export default Home;
