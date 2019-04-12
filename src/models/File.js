const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toObject: { virtuals: true},
    toJSON: { virtuals: true}
});

File.virtual('url').get(function() {
    const server_url = process.env.URL || 'http://localhost:3000'
    return `${server_url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);