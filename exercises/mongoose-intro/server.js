const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/people");

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true
    }
    age: Number,
    interests: [String],
    friends: [String]
});

const Friend = mongoose.model("Friend", friendSchema);

const myFriend = new Friend({
    name: "JD",
    age: 24,
    interests: ["Music", "Food"],
    friends: []
})

myFriend.save((err, new_friend) =>{
      console.log(new_friend, "Successfully added");
});

// Friend.find({age: 24}, (err, friends) => {
//   console.log(friends);
// });
//
// Friend.findOne({age: 24},(err, friend) => {
//   console.log(friend);
// });

Friend.findOne({name: 'JD'}, (err, friend) => {
  friend.age++;
  friend.save((err, new_friend) => {
    console.log(new_friend);
    });
});

// Friend.findOne({name: "JD"}, (err, friend)=>{
//       friend.remove(err =>{
//         console.log("JD is gone");
//       })
// });
