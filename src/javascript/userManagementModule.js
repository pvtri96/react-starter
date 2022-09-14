export let users = [];
let count = 0

export function createUser(firstName, lastName, age, workAt) {
    count++;
    const user = {
        firstName, lastName, age, workAt, id: `${firstName}-${count}`
    }
    users.push(user);
    return user;
}

export function findAllUsers() {
    return users;
}

export function findUserById(id) {
    return users.find(user => user.id === id);
}

export function findUsers(params) {
    if (typeof params !== "object") {
        throw new Error("viet test cuc ngu")
    }

    return users.filter(user => {
        const expectedKeys = Object.keys(params);
        if (expectedKeys.length === 1) {
            const keyToCompare = expectedKeys[0]
            return params[keyToCompare] === user[keyToCompare]
        }
        let expectedCount = 0
        for (const paramsKey in params) {
            if (user[paramsKey] === params[paramsKey]) {
                expectedCount++
            }
        }
        return expectedCount === expectedKeys.length
    })
}

export function updateUserById(id, payload) {
    users = users.map(user => user.id === id ? {...user, ...payload} : user)
    return findUserById(id)
}

export function updateUsers(searchParams, updatedUser) {
    const paramKey = Object.keys(searchParams)[0]
    users = users.filter(value => value[paramKey] === searchParams[paramKey]).map(user => ({...user, ...updatedUser}))
    return users
}

export function deleteUserById(id) {
    const userToBeDeleted = findUserById(id)
    users = users.filter(user => user.id !== id)

    return userToBeDeleted
}

export function deleteUsers(searchParams) {
    const key=Object.keys(searchParams)[0]
    const usersToBeDeleted = users.filter(user => user[key] === searchParams[key])
    users = users.filter(user => !usersToBeDeleted.find(deleteUser => deleteUser.id === user.id))

    return usersToBeDeleted
}

// For unit tests only
export function reset() {
    users = [];
}
