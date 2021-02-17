let name="小明";
let age=24;
let flag=true;

function sum(num1,num2) {
	return num1+num2;
}

if(flag){
	console.log(sum(20,30));
}

//导出方式一
export {  //可以导出一个对象
    flag,
	sum
}

//导出方式二
export let e01=100;
export let e02="你好";

//导出方式三
let sex="男";
let e03=231;
let e04="这是e04";
export {sex,e03,e04}

//导出函数/类
export function mul(num1,num2){  //函数也可以直接放在对象里
	return num1+num2;
}

// 面向对象：程序中一切内容都看成对象，是一种编程思想
// 类：具有相似或相同形式的事物成为类
// 属性：类中事物的特性
// 方法：类中事物的行为
// 对象：类的具体实例
export class Person{ 
	run(){
		console.log("在奔跑");
	}
}


// export default  注意：只能导出一个
// const addres="北京市";
// export default addres;
// export default function (argument) {
// 	console.log(argument);
// }













