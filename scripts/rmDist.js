const rimraf = require('rimraf');

rimraf('dist',function(err){
    console.log('rimraf:'+(err||'success'));
});