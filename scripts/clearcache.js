const fs = require('fs');
const path = require('path');
fs.writeFileSync(path.join(__dirname,'./localdocs.cache'),"",'utf-8');
fs.writeFileSync(path.join(__dirname,'./localsrc.cache'),"",'utf-8');
console.log("缓存清除成功")