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
    name:{
        type:String,
      
    },
    email:{
        type:String,
        require:true,
        unique:true,
        index: true,
    },
    id:{
        type:String,
        require:true,
        unique:true,
        index: true,
    },
    password:{
        type:String,
        
    },
   
    image:{
type:String
    },
    role:{
        type:String
    } 
   
})

var model=mongoose.model('user',schema)

module.exports=model