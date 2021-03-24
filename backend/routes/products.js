const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');



/* Obtener todos los productos */
// Con postman puedo poner http://localhost:3000/api/products?page=3
//http://localhost:3000/api/products
//http://localhost:3000/api/products?limit=3


router.get('/', function (req,res) {

  let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;

  //Establecer límites de elementos por página
  const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;

  let startValue;
  let endValue;
  if (page > 0) {
    startValue = (page * limit) - limit;     // 0, 10, 20, 30
    endValue = page * limit;                  // 10, 20, 30, 40
  } else {
    startValue = 0;
    endValue = 10;
  }
//Aqui es como si hiciera una consulta de mysql
//SELECT * from products as p
//JOIN categories c on p.cat_id = c.id

  database.table('products as p')
      .join([
        {
          table: "categories as c",
          on: `c.id = p.cat_id`
        }
      ])
      .withFields(['c.title as category',
        'p.title as name',
        'p.price',
        'p.quantity',
        'p.description',
        'p.image',
        'p.id'
      ])
      .slice(startValue, endValue)
      .sort({id:.1})
      .getAll()
      .then(prods => {
        if (prods.length > 0) {
          res.status(200).json({
            count: prods.length,
            products: prods
          });
        } else {
          res.json({message: "No se encontraron los productos"});
        }
      })
      .catch(err => console.log(err));
});



//Obtener solo un producto
//http://localhost:3000/api/products/50
router.get('/:prodId', (req,res)=>{
  let productId = req.params.prodId;
  console.log(productId)

  database.table('products as p')
      .join([
        {
          table: "categories as c",
          on: `c.id = p.cat_id`
        }
      ])
      .withFields(['c.title as category',
        'p.title as name',
        'p.price',
        'p.quantity',
        'p.description',
        'p.image',
        'p.id',
        'p.images'
      ])
      .filter({'p.id': productId})
      .get()
      .then(prod => {
        console.log(prod);
        if (prod) {
          res.status(200).json(prod);
        } else {
          res.json({message: `No se ha encontrado ningún producto con id. ${productId}`});
        }
      }).catch(err => res.json(err));

});


//OBTENGA TODOS LOS PRODUCTOS DE UNA CATEGORÍA
//http://localhost:3000/api/products/category/Electronics
//http://localhost:3000/api/products/category/shoes
//http://localhost:3000/api/products/category/Electronics?page=2
//http://localhost:3000/api/products/category/Electronics?page=2&limit=1

router.get('/category/:catName', (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3636/api/products/category/categoryName?page=1
  let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;   // check if page query param is defined or not
  const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
  let startValue;
  let endValue;
  if (page > 0) {
    startValue = (page * limit) - limit;      // 0, 10, 20, 30
    endValue = page * limit;                  // 10, 20, 30, 40
  } else {
    startValue = 0;
    endValue = 10;
  }

  // Obtener el valor del título de la categoría del parámetro
  const cat_title = req.params.catName;

  database.table('products as p')
      .join([
        {
          table: "categories as c",
          on: `c.id = p.cat_id WHERE c.title LIKE '%${cat_title}%'`
        }
      ])
      .withFields(['c.title as category',
        'p.title as name',
        'p.price',
        'p.quantity',
        'p.description',
        'p.image',
        'p.id'
      ])
      .slice(startValue, endValue)
      .sort({id: 1})
      .getAll()
      .then(prods => {
        if (prods.length > 0) {
          res.status(200).json({
            count: prods.length,
            products: prods
          });
        } else {
          res.json({message: `No products found matching the category ${cat_title}`});
        }
      }).catch(err => res.json(err));
});


module.exports = router;
