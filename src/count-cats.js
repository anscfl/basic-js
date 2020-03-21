module.exports = function countCats(array) {
  let count = 0;
  for (let i of array){
    for(let j of i){
      if(j === "^^"){
        count++;
      }
    }
  }
  return count;
};
