import {Router} from "express";
import axios from "axios";

const router = Router();

const FAKESTORE_API = "https://fakestoreapi.com/products";


// GET all products OR filter
router.get("/", async (req, res) => {
  const { filter, value } = req.query;

  try {
    const response = await axios.get(FAKESTORE_API);
    let products = response.data;

    if (filter && value) {
      return res.send(
        products.filter(product =>
          product[filter]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      );
    }

    res.send(products);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching products" });
  }
});

// GET product by ID
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send({ msg: "Bad request" });
  }

  try {
    const response = await axios.get(`${FAKESTORE_API}/${id}`);
    res.send(response.data);
  } catch (error) {
    res.status(404).send({ msg: "Product not found" });
  }
});



export default router;



