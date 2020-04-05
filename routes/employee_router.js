
const express = require('express')

const EmployeeCtrl = require('../controllers/controller')

const router = express.Router()

router.post('/collection2', EmployeeCtrl.createEmployee)
router.put('/collection2/:id', EmployeeCtrl.Update)
router.delete('/collection2/:id', EmployeeCtrl.deleteEmployee)
router.get('/collection2/:id', EmployeeCtrl.getReviewsById)
router.get('/collection2', EmployeeCtrl.getAllEmployees)

module.exports = router