const mongoose=require('mongoose')
const url='mongodb://localhost:27017/univeristyproject';

mongoose.connect(
    url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
var schema=mongoose.Schema({
    purpose:{
        type:String
    },
    image:{
        type:String
    }, 
    
}) 

var model=mongoose.model('notification',schema)

module.exports=model