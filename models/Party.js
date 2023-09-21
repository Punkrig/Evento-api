const mongoose = require('mongoose');

const {Schema}= mongoose;

const {serviceSchema}= require('./Service');

const partySchema= new Schema({
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    budget:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    service:{
        type:[serviceSchema],
    }
}, 
{timestamps:true}
);

const Party= mongoose.model('Party', partySchema);

module.exports= Party;