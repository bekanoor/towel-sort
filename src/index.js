
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0 || matrix === undefined) return [];
  
  let result = [];

  matrix.map((item, index) => {
    index % 2 === 0 ? 
    item.map(n => result.push(n)) : 
    item.reverse().map(k => result.push(k))
  })

  return result;
}
