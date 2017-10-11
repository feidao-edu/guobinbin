
md5s=function(str){ 
    var crypto = require('crypto'); 
        var md5 = crypto.createHash('md5');  
      md5.update(str);  
    str = md5.digest('hex'); 
    return str;
  }
  console.log(md5s('11111111111'))
  