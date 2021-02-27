function showProfileMessage(message) {
  console.log(message, this.name);
}
const obj = {
  name: "Ankur Anand",
};

showProfileMessage.call(obj, "welcome ");

Function.prototype.myCall = function (someObj, ...args) {
  someObj.fn = this;
  someObj.fn(...args);
};

function myBind(...args) {
  const fn = this;
  return function (...args2) {
    fn.call(args[0], [...args[0].slice(1), ...args2]);
  };
}
