import { ProductsModel } from "../models/productModel.js";

export const getAllProd = async (req, res) => {
  try {
    const prod = await ProductsModel.find({});
    res.json(prod);
  } catch (error) {
    console.log("Datalar gelmedi");
  }
};

export const getProdId = async (req, res) => {
  try {
    const { id } = req.params;
    const prod = await ProductsModel.findById(id);
    res.json(prod);
  } catch (error) {
    console.log("Data gelmedi");
  }
};

export const createProd = async (req, res) => {
  try {
    const { name, price, title } = req.body;

    const newprod = new ProductsModel({ name, price, title });
    await newprod.save();
    res.json(newprod);
  } catch (error) {
    console.log("Data yaranmadi");
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, title } = req.body;
    const prod = await ProductsModel.findByIdAndUpdate(id, {
      name,
      price,
      title,
    });
    res.json(prod);
  } catch (error) {
    console.log("Data yenilenmedi");
  }
};

export const deleteProd = async (req, res) => {
  try {
    const { id } = req.params;
    const prod = await ProductsModel.findByIdAndDelete(id);
    res.json(prod);
  } catch (error) {
    console.log("Data silinmedi");
  }
};
