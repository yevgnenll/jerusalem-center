const bent = require('bent')
const getJSON = bent('json')
const semverMajor = require('semver/functions/major')
const semverGt = require('semver/functions/gt')
const packageJson = require('../../package.json')
const NODE_API_URL = 'https://nodejs.org/dist/index.json'

const express = require('express')
const app = express()

const isGrater = (a, b) => semverGt(a.version, b.version)

exports.home = (req, res) => {
    res.render('home.hbs')
}

exports.dependencies = (req, res) => {
    const dependencies = Object.entries(
        packageJson.dependencies
    ).map(([key, value]) => ({ name: key, version: value }))


    try {
        res.setHeader('Content-type', 'application/json')
        res.json(dependencies)
    } catch (error) {
        res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
    }
}

const getLatestReleases = (releases) =>
    releases.reduce((acc, release) => {
        const major = `v${semverMajor(release.version)}`
        const existing = acc[major]
        if (!existing || isGrater(release, existing)) {
            acc[major] = release
        }
        return acc
    }, {})

exports.latestReleases = async (req, res) => {
    try {
        res.setHeader('Content-type', 'application/json')
        const releases = await getJSON(NODE_API_URL)
        res.json(getLatestReleases(releases))
    } catch (error) {
        res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
    }
}