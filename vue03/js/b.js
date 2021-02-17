//  import的路径问题 https://blog.csdn.net/sinat_36422236/article/details/85051297

// 查找规则：
 // 1、./是当前目录
 
 // 2、../是父级目录
 
 // 3、/是根目录

import {e01} from "./impJs/a.js";
console.log(e01);
 
// import {flag,sum} from "./a.js";
// import {e01,e02} from "./a.js";
// import {sex,e03,e04} from "./a.js";
// import {mul,Person} from "./a.js";
// console.log(flag);
// console.log(e01,e02);
// console.log(sex);
// console.log(e03,e04);
// console.log(sum(100,200));
// console.log(mul(3,5));

// const newP=new Person();
// newP.run();

// import addr from "./a.js"  //用自定义变量名来接收
// //console.log(addr); //北京市
// addr("你好啊");


// // 统一全部导入
// import * as quanbu from "./a.js";  //quanbu是一个对象 包含所有导出的信息
// console.log(quanbu);
// console.log(quanbu.sex);