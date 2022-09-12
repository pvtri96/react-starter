export let users = [];

export function createUser(firstName, lastName, age, workAt) {}

export function findAllUsers() {}
export function findUserById(id) {}
export function findUsers(params) {}

export function updateUserById() {}
export function updateUsers(searchParams, updatedUser) {}

export function deleteUserById(id) {}
export function deleteUsers(searchParams, updatedUser) {}

// For unit tests only
export function reset() {
  users = [];
}
