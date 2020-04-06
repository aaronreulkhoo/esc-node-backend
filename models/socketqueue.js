const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocketQueueSchema = new Schema({
    category: {
        type: Number,
        required: [true, "Category field required"]
    },
    token: {
        type: String,
        required: [true, "Token field required"]
    },
    socketId: {
        type: String,
        required: [true, "Token field required"]
    },
    agentId: {
        type: String,
        required: [true, "AgentId field required"]
    },
    agentName: {
        type: String,
        required: [true, "Agent Name field required"]
    }
}, {timestamps: true });

const SocketQueue = mongoose.model('queue', SocketQueueSchema);

module.exports = SocketQueue;