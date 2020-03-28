const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({

    username: {
        type: String,
        require: true
    },
    
    task: {
        type: String,
        required: true,
    },

    priority: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;