import Dropdown from "react-bootstrap/Dropdown";

const Filter = ({ setSelectedCategory }) => {
  return (
    <Dropdown className="w-100">
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        All Product Items
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setSelectedCategory("all")}>
          All items
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setSelectedCategory("men's clothing")}>
          Men's clothing
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setSelectedCategory("jewelery")}>
          Jewelery
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setSelectedCategory("electronics")}>
          Electronics
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setSelectedCategory("women's clothing")}>
          Women's clothing
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;



