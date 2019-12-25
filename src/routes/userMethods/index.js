const create = require('./create')
const update = require('./update')
const list = require('./list')
const deleteUser = require('./delete')
const searchUser = require('./search')

const Methods = {
    create,
    update,
    list,
    deleteUser,
    searchUser
}

module.exports = Methods