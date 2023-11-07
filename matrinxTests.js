const chai = require('chai');
const expect = chai.expect;
const MatrixOperations = require('./matrixOperations');

describe('MatrixOperations', () => {
  describe('add', () => {
    it('should add two matrices with the same dimensions', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6], [7, 8]];
      const result = MatrixOperations.add(matrixA, matrixB);
      expect(result).to.deep.equal([[6, 8], [10, 12]]);
    });

    it('should throw an error when adding matrices with different dimensions', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6], [7, 8], [9, 10]];
      expect(() => MatrixOperations.add(matrixA, matrixB)).to.throw('A.dim !== B.dim');
    });
  });

  describe('multiply', () => {
    it('should multiply two matrices with compatible dimensions', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6], [7, 8]];
      const result = MatrixOperations.multiply(matrixA, matrixB);
      expect(result).to.deep.equal([[19, 22], [43, 50]]);
    });

    it('should throw an error when multiplying matrices with incompatible dimensions', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6, 7], [8, 9, 10]];
      expect(() => MatrixOperations.multiply(matrixA, matrixB)).to.throw('A.dim !== B.dim');
    });
  });

  describe('subtract', () => {
    it('should subtract two matrices with the same dimensions', () => {
      const matrixA = [[5, 4], [3, 2]];
      const matrixB = [[2, 1], [1, 2]];
      const result = MatrixOperations.subtract(matrixA, matrixB);
      expect(result).to.deep.equal([[3, 3], [2, 0]]);
    });

    it('should throw an error when subtracting matrices with different dimensions', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6], [7, 8], [9, 10]];
      expect(() => MatrixOperations.subtract(matrixA, matrixB)).to.throw('A.dim !== B.dim');
    });
  });

  describe('divide', () => {
    it('should divide two matrices element-wise with the same dimensions', () => {
      const matrixA = [[10, 12], [15, 18]];
      const matrixB = [[2, 3], [5, 6]];
      const result = MatrixOperations.divide(matrixA, matrixB);
      expect(result).to.deep.equal([[5, 4], [3, 3]]);
    });

    it('should throw an error when dividing matrices with different dimensions', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6], [7, 8], [9, 10]];
      expect(() => MatrixOperations.divide(matrixA, matrixB)).to.throw('A.dim !== B.dim');
    });

    it('should throw an error when dividing by zero', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[0, 0], [0, 0]];
      expect(() => MatrixOperations.divide(matrixA, matrixB)).to.throw('Division by zero is not allowed.');
    });
  });

});