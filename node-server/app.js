const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next)=>{
    console.log(`request: `,req)
    console.log(`response: `, res)
})

app.get('/', (req, res) => {
    res.send('')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})