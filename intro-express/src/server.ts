import express, { Request, Response } from 'express';
import fs from 'fs'; // file system

const PORT: number = 8000;

const app = express();

// Middleware: Body Parser
app.use(express.json());

// CRUD (Create, Read, Update, dan Delete)
// GET
app.get('/api/products', (req: Request, res: Response) => {
  try {
    const productsJSON = fs.readFileSync('./src/db/products.json', 'utf-8');
    const products = JSON.parse(productsJSON);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
});
// POST
app.post('/api/products', (req: Request, res: Response) => {
  try {
    const { name, price, stock, unit } = req.body;

    const productsJSON = fs.readFileSync('./src/db/products.json', 'utf8');
    const products = JSON.parse(productsJSON);
    products?.push({ id: products?.length + 1, name, price, stock, unit });

    fs.writeFileSync('./src/db/products.json', JSON.stringify(products));

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: {
        name,
        price,
        stock,
        unit,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: {},
    });
  }
});

// PUT    : Update data keseluruhan
// PATCH  : Update data sebagian
app.put('/api/products/:id', (req: Request, res: Response) => {
  try {
    const { id } = req?.params;
    const { name, price, stock, unit } = req?.body;

    const productsJSON = fs.readFileSync('./src/db/products.json', 'utf8');
    const products = JSON.parse(productsJSON);

    const indexOfProduct = products?.findIndex(
      (product: any) => product?.id == id,
    );
    
    products[indexOfProduct].name = name;
    products[indexOfProduct].price = price;
    products[indexOfProduct].stock = stock;
    products[indexOfProduct].unit = unit;

    console.log(products);
  } catch (error) {
    console.log(error);
  }
});

// DELETE

app.listen(PORT, () => {
  console.log(`[⚡SERVER] Running on port ${PORT}`);
});
