export let users = [];

export function createUser(firstName, lastName, age, workAt) {
  const user = { firstName, lastName, age, workAt };
  users = [...users, user];
  return user;
}

export function findAllUsers() {
  return user;

}
export function findUserById(id) {
  return users.find((user) => {
    return user.id === id;
  });
}
export function findUsers(params) { }

export function updateUserById(id, payload) {
  let UpdateUsers = []
  users = users.map(user => {
    if (user.id == id) {
      const updateUser = { ...user, ...payload };
      updateUsers.push(updateUser);
      return updateUser;
    }
    return user;
  });
  return UpdateUsers;
}
export function updateUsers(searchParams, payload) { }

export function deleteUserById(id) {
  users = users.filter(user => {
    return user.id !== id;
  });
}
export function deleteUsers(searchParams) { }

// For unit tests only
export function reset() {
  users = [];
}
