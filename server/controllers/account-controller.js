const Account = require('../models/account')

createAccount = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an account',
    })
  }

  const account = new Account(body)

  if (!account) {
    return res.status(400).json({ success: false, error: err })
  }

  account
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: account._id,
        message: 'Account created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Account not created!',
      })
    })
}

updateAccount = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  Account.findOne({ _id: req.params.id }, (err, account) => {
    if (err) {
      return res.status(404).json({
          err,
          message: 'Account not found!',
      })
    }
    account.firstName = body.firstName
    account.lastName = body.lastName
    account.dob = body.dob
    account.address = body.address
    account.phoneNumber = body.phoneNumber
    account.note = body.note
    account
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: account._id,
          message: 'Account updated!',
          account: account,
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Account not updated!',
        })
      })
  })
}

deleteAccount = async (req, res) => {
  await Account.findOneAndDelete({ _id: req.params.id }, (err, account) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!account) {
      return res
        .status(404)
        .json({ success: false, error: `Account not found` })
    }

    return res.status(200).json({ success: true, data: account })
  }).catch(err => console.log(err))
}

getAccountById = async (req, res) => {
  await Account.findOne({ _id: req.params.id }, (err, account) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!account) {
      return res
        .status(404)
        .json({ success: false, error: `Account not found` })
    }
    return res.status(200).json({ success: true, data: account })
  }).catch(err => console.log(err))
}

getAccount = async (req, res) => {
  await Account.find({}, (err, account) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!account.length) {
      return res
        .status(404)
        .json({ success: false, error: `Account not found` })
    }
    return res.status(200).json({ success: true, data: account })
  }).catch(err => console.log(err))
}

module.exports = {
  createAccount,
  updateAccount,
  deleteAccount,
  getAccount,
  getAccountById,
}