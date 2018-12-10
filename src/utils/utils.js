const util = require('util');
const exec = util.promisify(require('child_process').exec);

const generateSecret = async function (){
    const {stdout, stderr} = await exec('openssl rand -base64 64');
    if (stdout){
        return stdout.toString();
    } else console.log(stderr);
}
module.exports =  generateSecret.toString();