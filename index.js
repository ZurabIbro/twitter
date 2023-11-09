const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/tweets.route'))

mongoose.connect('mongodb+srv://twitter:qwerty123@twitter.rwz9qna.mongodb.net/twitter')
.then(() => console.log('Connected - MongoDB'))
.catch(() => console.log('Connection failed - MongoDB'))

app.listen(3000, () => console.log('Connected to server'))
