// Получение данных
// Для получения данных можно использовать целый набор методов:

// find: возвращает все объекты, которые соответствуют критерию фильтрации

// findById: возвращает один объект по значению поля _id

// findOne: возвращает один объект, который соответствует критерию фильтрации

// Метод find() в качестве первого параметра принимает критерий фильтрации, а второй параметр - функция обратного вызова, в которую передаются полученные из бд документы:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });
const userScheme = new Schema({ name: String, age: Number }, { versionKey: false });
const User = mongoose.model("User", userScheme);

// User.find({}, (err, docs) => {
//     mongoose.disconnect();
//     if (err) return console.log(err);
//     console.log(docs);
// });

// User.findOne({ name: "Tom" }, function (err, doc) {
//     mongoose.disconnect();
//     if (err) return console.log(err);
//     console.log(doc);
// });

// const id = "588a0f8c9151d23ce47bf98d";
// User.findById(id, function (err, doc) {
//     mongoose.disconnect();
//     if (err) return console.log(err);
//     console.log(doc);
// });

// User.deleteMany({age:33}, function(err, result){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log(result);
// });


// User.deleteOne({name:"Bill"}, function(err, result){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log(result);
// });

// User.findOneAndDelete({name:"Bill"}, function(err, doc){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Удален пользователь ", doc);
// });

// const id = "588a0f8c9151d23ce47bf98d";
// User.findByIdAndDelete(id, function(err, doc){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Удален пользователь ", doc);
// });



// User.updateOne({name: "Tom"}, {name: "Tom Smith"}, function(err, result){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log(result);
// });

// const id = "588b2d6fc7d95503980ecf99";
// User.findByIdAndUpdate(id, {name: "Sam", age: 25}, function(err, user){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Обновленный объект", user);
// });

// User.findOneAndUpdate({name: "Sam"}, {name: "Bill", age:24}, {new: true}, function(err, user){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Обновленный объект", user);
// });


