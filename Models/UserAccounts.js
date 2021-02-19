const mongoose = require('mongoose');






//schema
const Schema = mongoose.Schema;
const UserAccountSchema = new Schema({
    name: String,
    username: String,
    password: String ,
    email: String,
    phone: Number,
    type: String,
    contract: String,
    companyName: String,
    socialRank:{
        type: Number,
        default: 0,
    },
    industry: String,
    residents: String,
    languages: String,
    tsn: Number,
    dob: String,
    date:{
        type:String,
        default: Date.now()
    },
    status:{
        type: String,
        default: 'pending',
    },
    points:{
        type:Number,
        default:0
    }
});





//model
const UserAccount = mongoose.model('UserAccount',UserAccountSchema)

module.exports = UserAccount;


