const express = require('express')
const axios = require('axios')
const cors = require('cors')
const React = require('react')

//React server side...
const {renderToString} = require('react-dom/server')

const port = process.env.PORT || 5000
const app = express()

const url = 'http://api.invent.mx/v1/actitudfem/node.json/22360f3a2e03f847acf5339695e42e5b??limit=9&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype'

app.use(cors({credentials: true, origin: true}))

app.get("/", (req, res) => {
  res.status(200).send({asd:'asdasd'})
});

app.get('/api', (req,res) => {

  axios.get(url)
    .then( response => res.status(200).send(response.data))
    .catch( err => console.log(err))
})

app.listen(port, (err) => {
  if(err) {
    console.log(`Server Fail at port ${port} log : ${err}`)
  }
  console.log(`Listen at port : ${port}`)
})