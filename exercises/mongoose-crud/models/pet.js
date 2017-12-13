const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    info: {
        species: String,
        breed: String
    },
    adopted: {
          type: Boolean,
          default: false
    },
    gender: {
        type: String,
        enum: ["male", "female", "neutered/spayed"]
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }

});

module.exports = mongoose.model("Pet", petSchema);
