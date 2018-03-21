const express = require('express')
const axios = require('axios')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 5000

const url = 'http://api.invent.mx/v1/actitudfem/node.json/22360f3a2e03f847acf5339695e42e5b??limit=9&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype'

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {

    axios.get(url)
      .then( response => {
        response.data.data.filter(el => {
          return el.id === req.params.id
        })
      })
      .catch( err => console.log(err))

    const actualPage = '/' 
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/api', (req,res) => {
    axios.get(url)
      .then( response => res.status(200).send(response.data))
      .catch( err => console.log(err))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
