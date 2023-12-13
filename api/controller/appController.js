const bent = require('bent')
const getJSON = bent('json')
const semverMajor = require('semver/functions/major')
const semverGt = require('semver/functions/gt')
const packageJson = require('../../package.json')
const NODE_API_URL = 'https://nodejs.org/dist/index.json'

const isGrater = (a, b) => semverGt(a.version, b.version)

exports.home = (req, res) => {
    res.render('home.hbs')
}