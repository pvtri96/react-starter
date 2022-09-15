export let users = [];

export function createUser(firstName, lastName, age, workAt) {}

export function findAllUsers() {}
export function findUserById(id) {}
export function findUsers(params) {}

export function updateUserById() {}
export function updateUsers(searchParams, payload) {}

export function deleteUserById(id) {}
export function deleteUsers(searchParams) {}

// For unit tests only
export function reset() {
  users = [];
}
