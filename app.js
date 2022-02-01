const express = require("express");
const path = require("path");
// const hbs = require("hbs");

const port = process.env.PORT || 8080;

const app = express();

// Define paths for Express config
// const publicPath = path.join(__dirname, "./public")
// const viewsPath = path.join(__dirname, "./templates/views")
// const partialsPath = path.join(__dirname, "./templates/partials")

// Setup handlebars engine and views location
// app.set('view engine', 'hbs')
// app.set('views', viewsPath)
// hbs.registerPartials(partialsPath)

// set public directory
// app.use(express.static(publicPath))


app.get('/', (req, res) => {
  res.send('Working ⚛️')
})

// start up server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})