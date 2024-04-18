const express = require('express')
const app = express()
const port = process.env.PORT || 5003;

const users = [
     {id: 1, name: 'sabana',email:'sabana@gmail.com'},
     {id: 2, name: 'sabnur',email:'sabanur@gmail.com'},
     {id: 3, name: 'sakib',email:'sakib@gmail.com'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})