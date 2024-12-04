const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MessageModel, BookingModel,OrderModel  } = require('./db'); // Import the Mongoose model
const app = express();
 
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// Health Check
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Save Contact Form Data
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            console.error('Validation Error: Missing required fields.');
            return res.status(400).send({ message: 'All fields are required!' });
        }

        // Save data to MongoDB
        const newMessage = new MessageModel({ name, email, message });
        await newMessage.save();
        console.log('Message saved:', newMessage);
        res.status(201).send({ message: 'Message saved successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Get All Messages (Optional)
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await MessageModel.find({});
        res.status(200).send(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});


// Save Booking Data
app.post("/bookings", async (req, res) => {
    try {
      const { name, email, date, time } = req.body;
  
      // Validation
      if (!name || !email || !date || !time) {
        return res.status(400).send({ message: "All fields are required!" });
      }
  
      // Save booking to MongoDB
      const newBooking = new BookingModel({ name, email, date, time });
      await newBooking.save();
      console.log("Booking saved:", newBooking); // It helps you verify that the backend is receiving and saving the correct data.
      res.status(201).send({ message: "Booking saved successfully!" });
    } catch (error) {
      console.error("Error saving booking:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
  // Get All Bookings (Optional)
  app.get("/bookings", async (req, res) => {
    try {
      const bookings = await BookingModel.find({});
      res.status(200).send(bookings);
    } catch (error) {
      console.error("Error retrieving bookings:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

 // Place an Order
app.post('/orders', async (req, res) => {
  try {
      const { customerName, email, mobile, items, totalAmount } = req.body;

      // Validation
      if (!customerName || !email || !mobile || !items || items.length === 0 || !totalAmount) {
          return res.status(400).send({ message: "All fields are required!" });
      }

      // Save order to MongoDB
      const newOrder = new OrderModel({ customerName, email, mobile, items, totalAmount });
      await newOrder.save();
      console.log('Order saved:', newOrder);
      res.status(201).send({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Fetch All Orders (Optional for admin view)
app.get('/orders', async (req, res) => {
  try {
      const orders = await OrderModel.find({});
      res.status(200).send(orders);
  } catch (error) {
      console.error('Error retrieving orders:', error);
      res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Start the server
const PORT = 3001; // Port where the backend server will run
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
