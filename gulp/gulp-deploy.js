
var util = require('gulp-util');
var GulpSSH = require('gulp-ssh');

var pwd = util.env.pwd;
console.log(util.env.pwd);

module.exports = function(){
    var config = {
        host: '158.69.218.26',
        port: 22,
        username: 'root',
        password: pwd
    };

    var gulpSSH = new GulpSSH({
        ignoreErrors: false,
        sshConfig: config
    });
};



