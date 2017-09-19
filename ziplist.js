let testLetters = ['a', 'b', 'c'];
let testNums = [1, 2, 3];

function zipList(letters, nums) {
  let newList = [];
  for (let i = 0; i < letters.length; i++) {
    newList.push(letters[i], nums[i]);
  }
  return newList;
}

console.log(zipList(testLetters, testNums));

function zipListTheSimpleWay(letters, nums) {
  return _.flatten(_.zip(letters, nums));
}

console.log(zipListTheSimpleWay(testLetters, testNums));
