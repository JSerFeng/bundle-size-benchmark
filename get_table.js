const path = require('path')
const fs = require('fs')

const files = [
  ["webpack terser swc", /webpack\.js/],
  ["webpack terser", /webpack-terser\.js/],
  ["rspack swc", /rspack\.js/],
  ["rspack terser", /rspack-terser\.js/],
  ["rspack terser swc", /rspack-terser-swc\.js/],
  ["rollup", /rollup\.js/],
  ["rolldown", /rolldown\.js/],
  ["vite", /vite\.js/],
  ["esbuild", /esbuild\.js/],
  ["parcel", /parcel\..*\.js/],
];

files.forEach(file => {
  const [name, pattern] = file
  const dirs = fs.readdirSync('./dist')
  const find = dirs.find(dir => pattern.test(dir))
  if (!find) {
    console.log(`File not found: ${name}`)
    return
  }

  const filePath = path.resolve(__dirname, `./dist/${find}`)
  const stats = fs.statSync(filePath)
  console.log(`${name}: ${parseInt(stats.size / 1024)}`)
})
