require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose'); // mongo db ko connect krta he

// cookie parser gps ki trh hr particular user ko track krta he yani user ki id ko get krta he hum jb sign up page se data lete he mongo db me dalne ke liye ko ye uski is ko leta he
const cookieParser = require('cookie-parser');

const bcrypt = require('bcryptjs'); // ye password ko secure  krta he

const cors = require('cors');  // ye react ke loaclhost ko handle krta he acces krne ke liye yani ye backend ko btata he ki data kis loaclhost se lena he,server ko batta he data kha se lena he

const bodyParser = require('body-parser'); // data ko jsn file me convert krke mongo db me store krta he or admit ke data get ke page store krvata he

const path = require('path');
const jwt = require('jsonwebtoken');


const app = express();  // express ko initilize krta he/

// Middleware to parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// ======================== MULTER AND UPLOAD FOLDER ====================================================
const multer = require("multer")
const upload = multer({ dest: 'codebuddy/' });
app.use('/codebuddy', express.static('codebuddy'));
// yani ye image video etc ke upload ko handle krta he
// Handles file uploads, like when a user submits an image or document.
//  It lets you easily store files in a folder on your server and access them later

// ======================== CORS LIBRARY ================================================================
// ye react ke loaclhost ko handle krta he acces krne ke liye yani ye backend ko btata he ki data kis loaclhost se lena he,server ko batta he data kha se lena he
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://service-portal-1-r55e.onrender.com',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    // Requests without an Origin header include health checks and server-to-server calls.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser()); // ye id ko handle krta he


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// ye schema he yani mongo db me jo data store hoga usme ky ky feild honi chahiye ye issse bnta he

// Define a Mongoose schema
const DataSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role:{
    type : String,
    default:"visitor",
  }
});
// Create a Mongoose model
const Data = mongoose.model('Data', DataSchema);

//  users ye data ko mongo db ke alava ek page pr get krta he taki admin bhi us data ko dekh ske
app.get('/user', async (req, res) => {
  try {
    const data = await Data.find();
    if (data.length) {
      return res.status(200).json({ code: 200, message: 'Data fetched successfully', data });
    } else {
      return res.status(404).json({ code: 404, message: 'No data found' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ code: 500, message: 'Internal server error' });
  }
});

// POST method ye signup page se data ko leke mongo db me dalta he
app.post('/signup', async (req, res) => {
  const { username, email, phone, password } = req.body;

  try {
    const existingUser = await Data.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ code: 409, message: ' already have an account' });

    }
    const hash = await bcrypt.hash(password, 10);
    const user = await Data.create({ username, email, password: hash, phone });
    return res.status(201).json({ code: 201, message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error.message);
    return res.status(500).json({ code: 500, message: 'Internal server error' });
  }

  
});





app.post('/login', async (req, res) => {
  try {
    console.log('Login Request Body:', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await Data.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({ success: false, message: 'Server configuration error' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    const isProduction = process.env.NODE_ENV === 'production' || process.env.RENDER === 'true';

    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error('Login error:', error.message, error.stack);
    res.status(500).json({ success: false, message: ' server error' });
  }
});

app.post('/logout', (req, res) => {
  try {
    // Clear the token cookie
    const isProduction = process.env.NODE_ENV === 'production' || process.env.RENDER === 'true';
    res.clearCookie('token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
    });
    res.status(200).json({ success: true, message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error.message);
    res.status(500).json({ success: false, message: 'Server error during logout' });
  }
});

// Forgot Password - Direct Reset
app.post('/forgot-password', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Find the user by email
    const user = await Data.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found!' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password has been reset successfully!',
    });
  } catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});


// ============================================Start server=====================================
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});








