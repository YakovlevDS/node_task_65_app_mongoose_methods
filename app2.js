// ! Валидация
// Mongoose имеет ряд встроенных правил валидации, которые мы можем указать в схеме:

// required: требует обязательного наличия значения для свойства

// min и max: задают минимальное и максимальное значения для числовых данных

// minlength и maxlength: задают минимальную и максимальную длину для строк

// enum: строка должна представлять одно из значений в указанном массиве строк

// match: строка должна соответствовать регулярному выражению

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });
 
// установка схемы
const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
});
const User = mongoose.model("User", userScheme);
const user = new User({name: "Li"});
 
user.save(function(err){
    mongoose.disconnect();
    if(err) return console.log(err);
     
    console.log("Сохранен объект user", user);
})