const { json } = require('express');
const express = require('express');
const productos=express();

productos.set('view engine', 'ejs');
productos.use(express.urlencoded({extended:false}));
productos.use(express(json));
productos.use('/', require('./router'));

productos.listen(5000,()=>{
    console.log('Servidor corriendo en: http://localhost:5000');
});