const express = require('express')

const AccountCtrl = require('../controllers/account-controller')

const router = express.Router()

router.post('/account', AccountCtrl.createAccount)
router.put('/account/:id', AccountCtrl.updateAccount)
router.delete('/account/:id', AccountCtrl.deleteAccount)
router.get('/account/:id', AccountCtrl.getAccountById)
router.get('/account', AccountCtrl.getAccount)

module.exports = router