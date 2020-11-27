module.exports = {
  env: {
    revision: require('child_process').execSync('git log -1 --format=%cd').toString().trim()
  }
}