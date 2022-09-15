const fs = require("fs");
const path = require("path");

const dotenvFilePath = path.join(process.cwd(), ".env");
if (!fs.existsSync(dotenvFilePath)) {
  fs.writeFileSync(dotenvFilePath, "DELAY=0");
}

require("dotenv").config();

function getDelay() {
  return parseInt(process.env.DELAY) ?? 0;
}

module.exports = { getDelay };
