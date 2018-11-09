const rimraf = require('rimraf');

let files = process.argv.slice(2);

files.length && files.forEach(function(file) {
    rimraf.sync(file);
    console.log('rm '+file+' success!');
});

