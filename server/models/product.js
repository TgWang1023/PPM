const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Product name cannot be empty!'], minlength: [4, 'Product title must be at least 4 characters long!']},
    price: {type: String, required: [true, 'Price cannot be empty!']},
    url: {type: String},
}, {timestamps: true})
mongoose.model('Product', ProductSchema);
Product = mongoose.model('Product');