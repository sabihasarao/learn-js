function deepClone(matrix) {
  return matrix.map(row => [...row]);
}

const originalMatrix = [
  [3, 2, 1],
  [4, 5, 6],
  [7, 9, 8]
];

const newMatrix = deepClone(originalMatrix).map(row => row.sort());

// Modifying the original matrix (changing the last element of the first row)
originalMatrix[0][2] = 99;

// Displaying the original and new matrices
console.log('Original Matrix (modified):', originalMatrix);
console.log('New Matrix (unaffected):', newMatrix);
