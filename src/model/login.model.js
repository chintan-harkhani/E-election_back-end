const mongoose = require("mongoose");
// Login model schema defiend
const LoginSchema = new mongoose.Schema(
    {
          cardNo :{
             type : String,
             trim : true,
          },
          password :{
             type : String,
             trim : true,
          },
          name : {
             type :String,
             trim:true,
          },
          token : {
               type :String,
          },
          is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const Login =    mongoose.model("Login" , LoginSchema);
//module expoart
module.exports = Login;
