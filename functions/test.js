const path = require('path')
const fs = require('fs')
const json = require(`../files/data.json`);

exports.handler = async (event, context) => {
  const file = path.resolve(`${__dirname}/../files/data.txt`)
  const text = fs.readFileSync(file, 'utf-8')
    .split('\n')
    .filter(Boolean)

  const jsonText = json.message;
  return {
    statusCode: 200,
    body: `Hello ${text}, and ${jsonText}`
  }
}
