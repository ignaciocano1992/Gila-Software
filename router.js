const { request } = require('express');
const express=require('express');
const router=express.Router();

const conexion=require('./baseDeDatos/db')

//mostrar todos los registros de MYSQL tabla productos
router.get('/',(req,res)=>{
    
     conexion.query('SELECT * from productos',(error,results)=>{
         if(error){
             throw error;
         }else{
            res.render("indice",{results:results});
         }
     })
})

//Ruta eliminar registros
router.get("/borrar/:id",(req,res)=>{
    const id=req.params.id;
    conexion.query("DELETE FROM productos WHERE id=?",[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect("/");
        }
    })
});

//Ruta para crear registro en la base de datos 

router.get("/crear",(req,res)=>{
    res.render("crear");
})

const api=require("./controles/api");
router.post("/guardar",api.guardar);
router.post("/actualizar",api.actualizar);

//Ruta para editar registros

// router.get("/editar/:id",(req,res)=>{
//     const id=req.params.id;
//     conexion.query("SELECT * FROM productos WHERE id=?",[id],(error,results)=>{
//         if(error){
//             throw error;
//         }else{
//            res.render("editar",{productos:results[0]});
//         }
//     })

//     })


module.exports=router;