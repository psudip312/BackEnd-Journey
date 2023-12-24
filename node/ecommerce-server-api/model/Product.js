/* relational datable(sql) and no-sql*/

// relational database ma chai agadi na pre plan garnu parcga doesnt mean non relationma testo hudaina agdi preplan chai hunu nai parcha
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductModelSchema = new Schema({
  title: String,
  price: Number,
});

module.exports = mongoose.model("Product", ProductModelSchema);
