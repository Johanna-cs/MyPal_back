const express = require('express')
const models = require('./models')
const app = express()
const port = 4000
const userRouter = require('./routes/userRouter')

const cors = require('cors');
const bodyParser =require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get('/', (req, res) => {
  res.send('home')
})

// Utilisation des différents routers selon les routes définies ci-dessous :
app.use('/my-pal/users', userRouter)


models
.sequelize
.sync()
.then(() => app.listen(port, () => console.log(`App listening on port ${port}`)))