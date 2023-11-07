class MatrixOperations {
    static add(matrixA, matrixB) {
      if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error('A.dim !== B.dim');
      }
  
      const result = [];
  
      for (let i = 0; i < matrixA.length; i++) {
        result.push([]);
        for (let j = 0; j < matrixA[i].length; j++) {
          result[i].push(matrixA[i][j] + matrixB[i][j]);
        }
      }
  
      return result;
    }
  
    static subtract(matrixA, matrixB) {
      if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error('A.dim !== B.dim');
      }
  
      const result = [];
  
      for (let i = 0; i < matrixA.length; i++) {
        result.push([]);
        for (let j = 0; j < matrixA[i].length; j++) {
          result[i].push(matrixA[i][j] - matrixB[i][j]);
        }
      }
  
      return result;
    }
  
    static multiply(matrixA, matrixB) {
        if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error('A.dim !== B.dim');
      }
  
      const result = [];
  
      for (let i = 0; i < matrixA.length; i++) {
        result.push([]);
        for (let j = 0; j < matrixB[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < matrixA[i].length; k++) {
            sum += matrixA[i][k] * matrixB[k][j];
          }
          result[i].push(sum);
        }
      }
  
      return result;
    }
  
    static divide(matrixA, matrixB) {
      if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error('A.dim !== B.dim');
      }
  
      const result = [];
  
      for (let i = 0; i < matrixA.length; i++) {
        result.push([]);
        for (let j = 0; j < matrixA[i].length; j++) {
          if (matrixB[i][j] === 0) {
            throw new Error('Division by zero is not allowed.');
          }
          result[i].push(matrixA[i][j] / matrixB[i][j]);
        }
      }
  
      return result;
    }
  }
  
  module.exports = MatrixOperations;