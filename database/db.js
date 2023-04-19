const mongoose = require('mongoose')
const uri = 'mongodb+srv://admin:admin@cluster0.qcyyspp.mongodb.net/adminDashboard?retryWrites=true&w=majority'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion
