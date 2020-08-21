const router = require('express').Router()

router.use('/api', require('./itemRoutes'))

module.exports = router