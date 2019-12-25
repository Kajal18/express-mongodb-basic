const create = require('./create')
const update = require('./update')
const list = require('./list')
const deleteMovie = require('./delete')
const search = require('./search')

const Methods = {
    create,
    update,
    list,
    deleteMovie,
    search
}
module.exports = Methods