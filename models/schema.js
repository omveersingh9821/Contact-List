const mongoose = require('mongoose');

const DetailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const UserDetails = mongoose.model('userDetails', DetailsSchema);
module.exports = UserDetails;