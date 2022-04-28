const path = require("path")
const fs = require("fs")

// Adding this so I can take advantage of the shortened import directory reference
// as defined in tsconfig
exports.onCreateWebpackConfig = ({ actions, stage, loaders }, options) => {
  const srcPath = options.srcPath || path.resolve(__dirname, "./src")
  try {
    const stat = fs.statSync(srcPath)
    if (!stat.isDirectory) {
      console.warn(`src path is not a directory ${srcPath}`)
    }
  } catch (err) {
    console.warn(`src path not found ${srcPath}`)
  }
  actions.setWebpackConfig({
    resolve: {
      modules: [srcPath, "node_modules"],
    },
  })
}
