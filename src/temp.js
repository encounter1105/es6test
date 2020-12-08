export var a = 'lj';
// export var b = '梁娟';
// export var c = 'web';
// 包装成对象
var a = 'lj';
var b = '梁娟';
var c = 'web';
export {a, b ,c};
// 函数的模块化包装
export function add(a,b){
    return a+b;
}


// export{
//     name as a,
//     cname as b,
//     skill as c
// }
