const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req,res)=> {
//   console.log('req', req);
// })

app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})