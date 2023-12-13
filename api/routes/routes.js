const express = require('express')
const router = express.Router()
const appController = require('../controller/appController')

// Application Routes
router.get('/', appController.home)
router.get('/dependencies', appController.dependencies)
// router.get('/minimumSecure', appController.minimumSecurePage)
// router.get('/latestReleases', appController.latestReleasesPage)

// API Routes
// router.get('/api/minimum-secure', appController.minimumSecure)
router.get('/api/latest-releases', appController.latestReleases)
router.get('/api/dependencies', appController.dependencies)

module.exports = router