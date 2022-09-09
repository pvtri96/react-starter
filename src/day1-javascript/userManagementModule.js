export let users = [];
let id = 0;

export function createUser(firstName, lastName, age, workAt) {
  const user = {
    id: id++,
    firstName,
    lastName,
    age,
    workAt,
  };

  users.push(user);

  return user;
}

export function findAllUsers() {
  return users;
}

export function findUserById(id) {
  return users.find((u) => u.id === id);
}

export function findUsers(params) {
  const result = [];
  for (const user of users) {
    if (
      user.firstName === params.firstName ||
      user.lastName === params.lastName ||
      user.age === params.age ||
      user.workAt === params.workAt
    ) {
      result.push(user);
    }
  }
  return result;
}

export function updateUser() {}

export function deleteUser() {}

export function reset() {
  users = [];
}
