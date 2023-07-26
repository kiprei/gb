
const random = (min=1, max=100) => Math.floor(Math.random() * (max - min + 1) + min);

function randomArray(n=10, min=1, max=100) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = random(min, max);
    }

    return arr;
}
  
function execute(func, taskName, params = []) 
{
     console.log('Start of task ' + taskName);
     func.apply(params);
     console.log('End of task ' + taskName);
}