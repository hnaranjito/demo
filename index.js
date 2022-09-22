const numbers = [1,2,3,4,5];
function applyOperation(n) {
    return new Promise((resolve, reject) => {
    resolve(n);
 });
}


 const res = numbers.filter(async num => {
     const a = await applyOperation(num) > 3;
     return a;
 });

//const res = numbers.filter(num => num > 3);

console.log(res);