const mongoose= require("mongoose")

const UserDetailsSchema = new mongoose.Schema({
    fname : String,
    lname: String,
    email: String,
    password: String,

},
{
    Collection: "userInfo"
}
);

mongoose.model("userInfo", UserDetailsSchema)
