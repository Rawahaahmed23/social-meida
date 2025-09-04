const express = require("express");
const app = express();
// const userRoutes = require('./Routes/user')
// const comment = require('./Routes/comment')
// const Like = require('./Routes/Like')
// const post = require('./Routes/post')
const auth = require('./Routes/auth');
const post = require('./Routes/post')
const cookieParser = require("cookie-parser");
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",   // frontend ka port
  credentials: true
}));


// app.use('/api/users', userRoutes);
// app.use('/api/posts', post);
// app.use('/api/likes', Like);
// app.use('/api/comments', comment);

app.use('/api/auth', auth)
app.use('/api/posts', post)

const Port = 5000

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
})