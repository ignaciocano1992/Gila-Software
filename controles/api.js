const conexion=require("../baseDeDatos/db");

exports.guardar=(req,res)=>{
    const nomProducto=req.body.nomProducto;
    const skuProducto=req.body.skuProducto;
    const marcaProducto=req.body.marcaProducto;
    const costoProducto=req.body.costoProducto;
    const categoria=req.body.categoria;
    conexion.query("INSERT INTO productos SET ?",{NombreProducto:nomProducto,SkuProducto:skuProducto,MarcaProducto:marcaProducto,CostoProducto:costoProducto,Categoria:categoria},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    })
}

// exports.actualizar=(req,res)=>{
//     const nomProducto=req.body.nomProducto;
//     const skuProducto=req.body.skuProducto;
//     const marcaProducto=req.body.marcaProducto;
//     const costoProducto=req.body.costoProducto;
//     const categoria=req.body.categoria;
//     conexion.query("UPDATE productos SET ? WHERE id=?" , [{nomProducto:nomProducto,skuProducto:skuProducto,marcaProducto:marcaProducto,costoProducto:costoProducto,categoria:categoria}],(error,results)=>{

//         if(error){
//             console.log(error);
//         }else{
//             res.redirect("/");
//         }
//     })
    

// }