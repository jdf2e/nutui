const fs = require('fs');
var path = require('path');
let marked = require('marked');
let package =require("../package.json") ;
if (!marked) {
    console.log('you need npm i marked -D!');
}


//let commomOption = null;
//插入 默认的 script 标签
let jsroot = `<script>export default {
    data(){
        return {
          content:'',
          codeurl:'',
          demourl:''
        }
      },
      methods:{
        closelayer(){
          this.content = '';
        },
        toast(e){
          const options = {
            noHeader:true,
            noFooter:true,
            content:e.target.parentElement.outerHTML
          }        
          this.content = options.content;
          let copy = this.copy;
          new copy('.copy',{
              target:res => {         
                return res.previousElementSibling
              }
          });   
        },  
    dsCode(e){
      let tag = e.target;
      if(tag.attributes.toast){
        this.toast(e)  
      }      
    }
  },
  mounted(){   
    let that = this;
    let pre = document.querySelectorAll('pre');     
    for(let i=0,item;item = pre[i];i++){      
      item.classList.toggle('prettyprint');   
      let creatC = document.createElement('i');
      creatC.setAttribute('copy','copy');    
      creatC.setAttribute('data-clipboard-action','copy');
      creatC.setAttribute('data-clipboard-target','code');
      creatC.setAttribute('class','copy')
      let creatA = document.createElement('i');
      creatA.setAttribute('toast','toast');  
      item.appendChild(creatC);
      item.appendChild(creatA);      
    }   

    let copy = this.copy;
    new copy('.copy',{
        target:res => {         
          return res.previousElementSibling
        }
    });    
    let demourl = 'http://nutui.jd.com/demo.html#'+that.$route.path;

    this.demourl = demourl;
    this.qrcode.toDataURL(demourl,{width:170},(err,url)=>{
      that.codeurl = url
    })
  }
}
</script>`;
//插入
function insert(sorce) {
    var insert = sorce.indexOf('</h1>');
    
    if (insert > -1) {
        return sorce.substring(0, insert) + '<i class="qrcode"><a :href="demourl"><span>请使用手机扫码体验</span><img :src="codeurl" alt=""></a></i>' + sorce.substring(insert, sorce.length);
    } else {
        return sorce
    }

}
///创建一个空文件
function createdFile(output, sorce,ishasCode) {
    var pathSrc = output;
    sorce = sorce.replace(/@latest/g,'@'+package.version)
    if(!ishasCode){       
        var res = insert(sorce);
    }   else{
       var  res = sorce;
    }
    fs.open(pathSrc, "w+", (err, fd) => {
        var bufs = `<template><div  @click="dsCode">
        <div v-if="content" class="layer">
          <span class="close-box" @click="closelayer"></span>
          <div v-html="content"></div>
        </div>`+ res + '</div></template>' + jsroot;
        var buf = new Buffer(bufs);
        if( typeof fd  == 'number'){
            fs.writeSync(fd, buf, 0, buf.length, 0);
         }else{
             console.log(pathSrc,' typeof fd ！= number 请改正文件')
         }
       
    })
}
function fileDisplay(filePath,outPath,nohead) {
    var rendererMd = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMd,
        highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
        },
        tables: true
    }, res => {

    })
    fs.readdir(filePath, (res, files) => {
        if (!res) {
            files.forEach(filename => {
                //获取当前文件绝对路径
                let filedir = path.join(filePath, filename);
                //文件写入             
                fs.stat(filedir, (err, stats) => {
                    if (!err) {
                        if (stats.isDirectory()) {
                            fileDisplay(filedir,outPath,nohead)
                        } else {
                            //判断文件类型是否是md文件
                            if (/.md$/.test(filedir)) {
                                //文件读取
                                fs.readFile(filedir, 'utf-8', (err, data) => {
                                    let html = marked(data);
                                    let filedirarry = filedir.split('.');
                                    let fdurl = filedirarry[0];
                                    let fileNames = [];
                                    for (let i = fdurl.length - 1; i > -1; i--) {
                                        if (/[a-zA-Z]/.test(fdurl[i])) {
                                            fileNames.push(fdurl[i])
                                        } else {
                                            fileNames.push('-')
                                        }
                                    }
                                    let newName = fileNames.reverse().join('').split('-');
                                    let resName = '';
                                    if(newName.indexOf('doc')>-1){
                                        resName = newName[newName.length - 2]
                                    }else{
                                        resName = newName[newName.length - 1]
                                    }
                                    
                                    createdFile(outPath + '/' + resName + '.vue', html,nohead)
                                });
                                //文件监听
                                let fsWatcher = fs.watchFile(filedir, {
                                    persistent: true,
                                    persistent: 1000
                                }, (err, data) => {
                                    //  console.log(err,data,filedir);
                                    fs.readFile(filedir, 'utf-8', (err, data) => {
                                        let html = marked(data);
                                        let filedirarry = filedir.split('/');
                                        let fileNames = filedirarry[filedirarry.length - 2];
                                        createdFile(outPath + '/' + fileNames + '.vue', html,nohead)
                                    });
                                });
                            }
                        }
                    }
                })
            })
        }
    })
}
//md转 其他格式类型
function MdToHtml(commomOption) {
   // commomOption = options;
    //获取所有的md 转html的结果
    fileDisplay(commomOption.entry,commomOption.output,commomOption.nohead);
}

MdToHtml.prototype.apply = function (compiler) {
    //  console.log(compiler,'lls')
};

module.exports = MdToHtml;