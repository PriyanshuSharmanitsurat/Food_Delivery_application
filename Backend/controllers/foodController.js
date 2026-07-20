import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item

const addFood= async (req,res) => {

    

    if (!req.file) {
        return res.status(400).json({success:false, message: "No image file uploaded. Send multipart/form-data with field name 'image'."})
    }

    let image_filename = `${req.file.filename}`

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save(); //by this food is saved in database
        res.json({success:true,message:"Food Item Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

//all food list from database

const listFood = async (req,res)=>{
      try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
      } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
      }
}

// remove food item

const removeFood = async (req,res)=>{
          try {
               const food =await foodModel.findById(req.body.id);
               fs.unlink(`uploads/${food.image}`,()=>{});// this will delete the image from uploads folder

               await foodModel.findByIdAndDelete(req.body.id);// delete from database
               res.json({success:true,message:"Food Removed"})
          } catch (error) {
              console.log(error);
              res.json({success:false,message:"error"})
          }
}



export {addFood,listFood,removeFood}