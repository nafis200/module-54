const express = require('express')
const app = express()
const port = process.env.PORT || 5003;
const cors = require('cors')
app.use(cors())
app.use(express.json())
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

app.post('/users',(req,res)=>{
    console.log('post api hittings');
    console.log(req.body);
    const newUser = req.body 
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})