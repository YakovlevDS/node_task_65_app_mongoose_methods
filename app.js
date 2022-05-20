// Данные, которые используются в Mongoose, описываются определенной схемой.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});
  
// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });
  
const User = mongoose.model("User", userScheme);
const user = new User({
    name: "Bill",
    age: 41
});

// user.save()
// .then(function(doc){
//     console.log("Сохранен объект", doc);
//     mongoose.disconnect();  // отключение от базы данных
// })
// .catch(function (err){
//     console.log(err);
//     mongoose.disconnect();
// });

user.save((err)=>{
    mongoose.disconnect();  // отключение от базы данных
    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});




