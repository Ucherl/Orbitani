const express = require('express')
const app = express()
const port = process.env.port || 3000

const publicDirectoryPath = __dirname

app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
