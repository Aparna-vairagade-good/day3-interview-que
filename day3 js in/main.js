// 
let x;
if (x === undefined) {
  text = "x is undefined";
} else {
  text = "x is defined";
}
console.log(text)

// console.log (a)
 
// 
let y = NaN;
console.log(y)

// 
function CallBackDemo() {
    CallBackDemo1()
    function CallBackDemo1() {
        CallBackDemo2()
        function CallBackDemo2() {
            CallBackDemo3()
            function CallBackDemo3() {
                CallBackDemo4()
                function CallBackDemo4() {
                    console.log("Callback Functon");
                }
            }
        }
    }
}
CallBackDemo()

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
console.log("Happy Birthday!")
}

// 
let hello = "";
hello = () => {
  return "Hello World!";
}
hello();

// 
(function () {
    console.log("Hello! I called myself")
})();

    // 





