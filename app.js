const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const restaurants = require('./public/jsons/restaurant.json').results
const port = 3000


app.use(express.static('public'))

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res)=>{
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res)=>{
  res.render('index', {restaurants})
})

app.get('/restaurant/:id', (req, res)=>{
  const id = req.params.id
  const restaurant = restaurants.find((food)=>food.id.toString()===id)
  res.render('show', {restaurant})
})

app.listen(port, ()=>{
  console.log(`server on http://localhost:${port}`)
})