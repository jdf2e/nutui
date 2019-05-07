const fs = require('fs');
const path = require('path');
let rimraf = require("rimraf");
rimraf('./cache',res=>{console.log(res)})
console.log("缓存清除成功")