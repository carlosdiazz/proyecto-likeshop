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
        //'p.description',
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


module.exports = router;
