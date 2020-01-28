function hello(req, res) {
    res.send({messageTest: "Hello World!!!"});
}

async function fib(req, res) {
    const {index} = req.params;
    console.log("index: ", index);
    const fibonacciValue = await fibonacci(index);
    res.send({message: `Fibonacci value: ${fibonacciValue}`});
}

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
}

module.exports = {
    hello,
    fib
}