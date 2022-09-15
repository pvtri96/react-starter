const { readUsersData, writeUsersData } = require("./userStorage");

function getAllUsers() {
  return readUsersData();
}

function getUserById(id) {
  return readUsersData().find((user) => user.id === id);
}

function createUser({
  firstName,
  lastName,
  workAt,
  school,
  city,
  country,
  address,
}) {
  const users = readUsersData();
  const newUser = {
    id: getRandomId(),
    firstName,
    lastName,
    workAt,
    school,
    city,
    country,
    address,
  };
  users.push(newUser);
  writeUsersData(users);
  return newUser;
}

function updateUserById(
  id,
  { firstName, lastName, workAt, school, city, country, address }
) {
  const users = readUsersData();
  let updatedUser;
  const newUsers = users.map((user) => {
    if (user.id === id) {
      updatedUser = {
        ...user,
        firstName,
        lastName,
        workAt,
        school,
        city,
        country,
        address,
      };
      return updatedUser;
    }
    return user;
  });
  writeUsersData(newUsers);
  return updatedUser;
}

function deleteUserById(id) {
  const users = readUsersData();
  let deletedUser;
  const newUsers = users.filter((user) => {
    if (user.id === id) {
      deletedUser = user;
    }
    return user.id !== id;
  });
  writeUsersData(newUsers);
  return deletedUser;
}

function getRandomId() {
  return Math.round(Math.random() * 10000);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
