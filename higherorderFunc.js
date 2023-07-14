
const radius = [1, 2, 3];

const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

const area = function(radius){
    return Math.PI * radius * radius;
}

const diameter = function(radius){
    return radius*2;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));