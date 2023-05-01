const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/Websitemern")
.then(()=>{
    console.log('connected successfully')
}).catch(() =>{
    console.log('no connection')
})