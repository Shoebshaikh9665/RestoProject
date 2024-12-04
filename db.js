let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/RestaurantDB")
.then(()=> console.log("Connected to MongoDB"))
.catch(error => console.error("MongoDB Connection error:",error));

// schema of Message
let column = new mongoose.Schema({
    "name":String,
    "email":String,
    "message":String,

});

let MessageModel = mongoose.model('Message',column);

// Schema for Table Bookings
let bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  let BookingModel = mongoose.model("Booking", bookingSchema);
   

// Schema for Orders
let orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  mobile:{ type:Number,required:true },
  items: [
      {
          name: String,
          price: Number,
          quantity: { type: Number, default: 1 },
      },
  ],
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

let OrderModel = mongoose.model('Order', orderSchema);

module.exports = { MessageModel, BookingModel, OrderModel };
