const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.json({
      mensaje: 'hola',
      array: {
        error: 500,
        status: true
      }
  })
})
 
app.listen(3000)
console.log('corriendo en el puerto 3000');