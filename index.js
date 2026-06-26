const mongoose = require('mongoose')
const User = require('./User')

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("Connected to MongoDB");

    const user = await User.create({
        name: 'Umayer',
        age: 21,
        email: 'mdumayer10@gmail.com',
        hobbies: ['bating','bowling'],
        address: {
          street: "Fatullah"
        }
    })

    // user.name = "Ahmad"
    // await user.save()

    // const user = new User({
    //     name: 'Umayer',
    //     age: 21,
    //     email: 'mdumayer10@gmail.com',
    // })
    // await user.save()

    console.log(user)

  } 
  catch (err) {
    console.log(err.message);
  }
}
connectDB();