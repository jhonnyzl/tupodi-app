import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/tupodi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find ( x => x._id === req.params.id);
  if (product) {
     res.send(product);
    } else {
      res.status(404).send({message:'Producto no encontrado'});
    }
});

app.get('/api/products', (req, res) =>{
    res.send(data.products);
});
app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.send('El servidor está listo');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});