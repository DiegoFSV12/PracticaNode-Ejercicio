import {getId} from '../plugins/uuid.plugin';
import {getAge} from '../plugins/get-age.plugin';
import {httpClientPlugin as http} from '../plugins/http-client.plugin';
import {buildLogger} from '../plugins/logger.plugin';
module.exports = {
    getId,
    getAge,
    http,
    buildLogger
}