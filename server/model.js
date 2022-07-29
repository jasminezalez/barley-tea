const mongoose = require('mongoose');
// const { number } = require('prop-types');
const Schema = mongoose.Schema;


//database will store all inputted words to track thoughts
const drinkSchema = new Schema({
    drink: {type: String, required: true},
    // status should indicate 1: found recipe, 2: made, 3: did like/recycle
    status: {type: Number, default: 1, required: true }},
    {
        versionKey: false
}
);

module.exports = mongoose.model('drinks', drinkSchema);