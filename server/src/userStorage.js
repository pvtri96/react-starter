const fs = require("fs");
const path = require("path");

const storagePath = path.join(process.cwd(), "storage");
if (!fs.existsSync(storagePath)) {
  fs.mkdirSync(storagePath);
}

const userDataPath = path.join(storagePath, "users.json");

if (!fs.existsSync(userDataPath)) {
  writeUsersData(getInitialUsers());
}

function writeUsersData(users) {
  fs.writeFileSync(userDataPath, JSON.stringify(users), { encoding: "utf8" });
}

function readUsersData() {
  if (fs.existsSync(userDataPath)) {
    const fileContent = fs.readFileSync(userDataPath, { encoding: "utf8" });
    return JSON.parse(fileContent);
  }
  return [];
}

function getInitialUsers() {
  return [
    {
      firstName: "John",
      lastName: "Doe",
      workAt: "gov",
      school: "Rado",
      city: "Hongkong",
      country: "China",
      address: null,
    },
    {
      firstName: "Lorem",
      lastName: "Ipsum",
      workAt: "gov",
      school: "Rado",
      city: "Bangkok",
      country: "Thai",
      address: null,
    },
  ];
}

module.exports = {
  writeUsersData,
  readUsersData,
};
