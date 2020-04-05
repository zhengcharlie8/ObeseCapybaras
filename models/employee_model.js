const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Employee = new Schema(
    {

        firstName: {type: String},
        lastName: { type: String},
        companyId: {type:Number},
        password: {type: String},
        positionTitle: {type: String},
        companyName: {type: String},
        employeeId: {type: Number},
        managerId: {type: Number},
        email: {type: String},
        startDate: {type: String},
        reviews: { type: [String]},
    }
)

module.exports =mongoose.model('collection2', Employee)
