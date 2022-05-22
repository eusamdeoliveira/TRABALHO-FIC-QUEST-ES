const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: false
    },

    roles: {
        type: [
            {
                type: String,
                enum: ['admin', 'student', 'teacher', 'user']
            }
        ],
        default: ['user']
    },

    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('user', userSchema)