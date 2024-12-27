const {getId} = require('../plugins/uuid.plugin');//Se estrae la funcion getId del modulo uuid.plugin
const {getAge} = require('../plugins/get-age.plugin');
const {http} = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin');
module.exports = {
    getId,
    getAge,
    http,
    buildLogger
}