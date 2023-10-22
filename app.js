const express = require("express");
const Joi = require("joi");
const app = express();
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

/*********MIDDLEWARE**********/

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

/*********ROUTES**********/

const products = [
  {
    id: "1",
    title: "Anyday Rain Boot In Black",
    price: 363.0,
    productImage: [
      "uploads/product-1/rain-boot-1.webp",
      "uploads/product-1/rain-boot-2.webp",
      "uploads/product-1/rain-boot-3.webp",
      "uploads/product-1/rain-boot-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "2",
    title: "The Scarlet Weekend Boot",
    price: 344.0,
    productImage: [
      "uploads/product-2/scarlet-1.webp",
      "uploads/product-2/scarlet-2.webp",
      "uploads/product-2/scarlet-3.webp",
      "uploads/product-2/scarlet-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "3",
    title: "The Marlin Weekend Boot",
    price: 344.0,
    productImage: [
      "uploads/product-3/marlin-1.webp",
      "uploads/product-3/marlin-2.webp",
      "uploads/product-3/marlin-3.webp",
      "uploads/product-3/marlin-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "4",
    title: "The Simone Weekend Boot",
    price: 292.0,
    productImage: [
      "uploads/product-4/simone-1.webp",
      "uploads/product-4/simone-2.webp",
      "uploads/product-4/simone-3.webp",
      "uploads/product-4/simone-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "5",
    title: "The Farrah Weekend Boot",
    price: 344.0,
    productImage: [
      "uploads/product-5/farrah-1.webp",
      "uploads/product-5/farrah-2.webp",
      "uploads/product-5/farrah-3.webp",
      "uploads/product-5/farrah-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "6",
    title: "The Limited Edition Allegra Weekend Boot",
    price: 292.0,
    productImage: [
      "uploads/product-6/allegra-1.webp",
      "uploads/product-6/allegra-2.webp",
      "uploads/product-6/allegra-3.webp",
      "uploads/product-6/allegra-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "7",
    title: "The Weekend Boot Beige",
    price: 344.0,
    productImage: [
      "uploads/product-7/beige-1.webp",
      "uploads/product-7/beige-2.webp",
      "uploads/product-7/beige-3.webp",
      "uploads/product-7/beige-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "8",
    title: "The Weekend Boot in Black",
    price: 344.0,
    productImage: [
      "uploads/product-8/black-1.webp",
      "uploads/product-8/black-2.webp",
      "uploads/product-8/black-3.webp",
      "uploads/product-8/black-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "9",
    title: "The Weekend Boot in Sage",
    price: 344.0,
    productImage: [
      "uploads/product-9/sage-1.webp",
      "uploads/product-9/sage-2.webp",
      "uploads/product-9/sage-3.webp",
      "uploads/product-9/sage-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "10",
    title: "The Weekend Boot in Indigo",
    price: 292.0,
    productImage: [
      "uploads/product-10/indigo-1.webp",
      "uploads/product-10/indigo-2.webp",
      "uploads/product-10/indigo-3.webp",
      "uploads/product-10/indigo-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "11",
    title: "The Weekend Boot in Navy",
    price: 292.0,
    productImage: [
      "uploads/product-11/navy-1.webp",
      "uploads/product-11/navy-2.webp",
      "uploads/product-11/navy-3.webp",
      "uploads/product-11/navy-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "12",
    title: "The Weekend Boot in Cuero",
    price: 344.0,
    productImage: [
      "uploads/product-12/cuero-1.webp",
      "uploads/product-12/cuero-2.webp",
      "uploads/product-12/cuero-3.webp",
      "uploads/product-12/cuero-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "13",
    title: "The Weekend Boot Classic Black",
    price: 344.0,
    productImage: [
      "uploads/product-13/classic-black-1.webp",
      "uploads/product-13/classic-black-2.webp",
      "uploads/product-13/classic-black-3.webp",
      "uploads/product-13/classic-black-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "14",
    title: "The Weekend Boot Classic Sage",
    price: 344.0,
    productImage: [
      "uploads/product-14/classic-sage-1.webp",
      "uploads/product-14/classic-sage-2.webp",
      "uploads/product-14/classic-sage-3.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "15",
    title: "The Weekend Boot Z in Grey",
    price: 344.0,
    productImage: [
      "uploads/product-15/zgrey-1.webp",
      "uploads/product-15/zgrey-2.webp",
      "uploads/product-15/zgrey-3.webp",
      "uploads/product-15/zgrey-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "16",
    title: "The Weekend Boot Z in Black",
    price: 344.0,
    productImage: [
      "uploads/product-16/zblack-1.webp",
      "uploads/product-16/zblack-2.webp",
      "uploads/product-16/zblack-3.webp",
      "uploads/product-16/zblack-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "17",
    title: "The Weekend Boot New Classic Brown",
    price: 344.0,
    productImage: [
      "uploads/product-17/classic-brown-1.webp",
      "uploads/product-17/classic-brown-2.webp",
      "uploads/product-17/classic-brown-3.webp",
      "uploads/product-17/classic-brown-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "18",
    title: "The Terrus in Sage",
    price: 240.0,
    productImage: [
      "uploads/product-18/terrus-sage-1.webp",
      "uploads/product-18/terrus-sage-2.webp",
      "uploads/product-18/terrus-sage-3.webp",
      "uploads/product-18/terrus-sage-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "19",
    title: "The Terrus in Beige",
    price: 240.0,
    productImage: [
      "uploads/product-19/terrus-beige-1.webp",
      "uploads/product-19/terrus-beige-2.webp",
      "uploads/product-19/terrus-beige-3.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "20",
    title: "The Terrus in Allegra",
    price: 240.0,
    productImage: [
      "uploads/product-20/terrus-allegra-1.webp",
      "uploads/product-20/terrus-allegra-2.webp",
      "uploads/product-20/terrus-allegra-3.webp",
      "uploads/product-20/terrus-allegra-4.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "21",
    title: "Sunset Red",
    price: 28.0,
    productImage: [
      "uploads/product-21/sunset-red-1.webp",
      "uploads/product-21/sunset-red-2.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "22",
    title: "Harvest Gold",
    price: 28.0,
    productImage: [
      "uploads/product-22/harvest-gold-1.webp",
      "uploads/product-22/harvest-gold-2.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "23",
    title: "The Farrah Weekend Boot",
    price: 28.0,
    productImage: [
      "uploads/product-23/desert-sand-1.webp",
      "uploads/product-23/desert-sand-2.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "24",
    title: "Woolly Footbed",
    price: 35.0,
    productImage: [
      "uploads/product-24/footbed-1.webp",
      "uploads/product-24/footbed-2.webp",
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
];

/***********************************************************/
/********* GET: ALL PRODUCTS **********/
/***********************************************************/

app.get("/api/products", (req, res) => {
  res.send(products);
});

/***********************************************************/
/********* GET: SINGLE PRODUCT **********/
/***********************************************************/

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  res.send(product);
});
/***********************************************************/
/********* POST: ADD PRODUCT **********/
/***********************************************************/

app.post("/api/products", upload.array("productImage"), (req, res) => {
  const imagePaths = req.files.map((file) => file.path);

  // Validate product
  const { error } = validateProduct({
    ...req.body,
    productImage: imagePaths,
  });

  if (error) return res.status(400).send(error);

  let sizes = req.body.sizes;

  // If it's a single size, convert it to an array
  if (!Array.isArray(sizes)) {
    sizes = [sizes];
  }

  // Validate and sort the sizes array in ascending order
  if (!validateSizes(sizes)) {
    return res.status(400).send("Invalid sizes array");
  }

  sizes.sort(); // Sort the sizes array

  const product = {
    id: uuidv4(),
    title: req.body.title,
    price: req.body.price,
    productImage: imagePaths,
    sizes: sizes,
  };

  products.push(product);
  res.send(product);
});

function validateSizes(sizes) {
  const allowedSizes = ["36", "37", "38", "39", "40"];
  return sizes.every((size) => allowedSizes.includes(size));
}

/***********************************************************/
/********* PUT: UPDATE PRODUCT **********/
/***********************************************************/

app.put("/api/products/:id", upload.array("productImage"), (req, res) => {
  // Find product
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with the given id was not found");
  }

  const imagePaths = req.files.map((file) => file.path);
  const sizes = req.body.sizes;

  // Validate sizes
  if (
    (!Array.isArray(sizes) && !isValidSize(sizes)) ||
    (Array.isArray(sizes) && !validateSizes(sizes))
  ) {
    return res.status(400).send("Invalid sizes");
  }

  const { error } = validateUpdateProduct({
    ...req.body,
  });

  if (error) return res.status(400).send(error);

  // Sort the sizes array in ascending order
  product.title = req.body.title;
  product.price = req.body.price;
  if (req.files.length > 0) {
    product.productImage = imagePaths;
  }
  product.sizes = Array.isArray(sizes)
    ? sizes.sort() // Sort the array
    : [sizes];

  res.send(product);
});

function isValidSize(size) {
  const allowedSizes = ["36", "37", "38", "39", "40"];
  return allowedSizes.includes(size);
}

/***********************************************************/
/********* DELETE: DELETE PRODUCT **********/
/***********************************************************/

app.delete("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  const index = products.indexOf(product);
  products.splice(index, 1);

  res.send(products);
});

function validateProduct(product) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    price: Joi.number().required(),
    productImage: Joi.any().required(),
    sizes: Joi.any().required(),
  });

  return schema.validate(product);
}

function validateUpdateProduct(product) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    price: Joi.number().required(),
    productImage: Joi.any(),
    sizes: Joi.any(),
  });

  return schema.validate(product);
}

/********* PORT **********/
//To set PORT run set/export PORT=YOUR_VALUE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
