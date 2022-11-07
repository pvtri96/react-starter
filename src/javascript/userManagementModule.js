export let users = [];

export function createUser(firstName, lastName, age, workAt) {
  const user = {firstName, lastName, age, workAt};
  users.push(user);
}

export function findAllUsers() {
  return users;
}
export function findUserById(id) {
  return users.filter(user => user.id === id);
}
export function findUsers(params) {
  const { firstName, lastName } = params;
  return users.filter(user => user.firstName === firstName || user.lastName === lastName)
}

export function updateUserById() {}
export function updateUsers(searchParams, payload) {}

export function deleteUserById(id) {
  users = users.filter(user => user.id !== id);
}
export function deleteUsers(searchParams) {}

// For unit tests only
export function reset() {
  users = [];
}
