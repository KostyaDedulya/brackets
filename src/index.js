module.exports = function check(str, bracketsConfig) {
  let bracketsObj = {}
  let bracketsStack = [];
  let arr = str.split('');

  bracketsConfig.forEach(item => {
      bracketsObj[item[0]] = item[1];
  });

  for(let i = 0; i < arr.length; i++) {
      if (arr[i] === bracketsObj[bracketsStack[bracketsStack.length - 1]]) {
          bracketsStack.pop();
      } else if (Object.keys(bracketsObj).includes(arr[i])) {
          bracketsStack.push(arr[i]);
      } else return false;
  }
  
  if (bracketsStack.length === 0) return true;
  return false;
}
