export let users = [];

export function createUser(firstName, lastName, age, workAt) {
  const user = {
    firstName,
    lastName,
    age,
    workAt,
  };
  users = [...users, user];
  return user;
}

export function findAllUsers() {
  return users;
}
export function findUserById(id) {
  return users.find((user) => {
    return user.id === id;
  });
}
export function findUsers(params) {}

export function updateUserById(id, payload) {
  let updatedUsers = [];
  users = users.map((user) => {
    if (user.id === id) {
      const updatedUser = { ...user, ...payload };
      updatedUsers.push(updatedUser);
      return updatedUser;
    }
    return user;
  });
  return updatedUsers;
}
export function updateUsers(searchParams, payload) {}

export function deleteUserById(id) {
  users = users.filter((user) => {
    return user.id !== id;
  });
}
export function deleteUsers(searchParams) {}

// For unit tests only
export function reset() {
  users = [];
}
