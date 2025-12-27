import { Form, Button } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex align-items-center w-100"
    
    >
      <Form.Control
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="me-3 px-4"
        value={searchTerm}
        onChange={handleSearch}
      />

      <Button variant="outline-dark" type="submit">
        <FiSearch />
      </Button>
    </Form>
  );
};

export default SearchBar;
