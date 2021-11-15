import { nanoid } from "nanoid";

export const createNewRow = (columns:number) => {
  const row = [];
  for (let i = 0; i < columns; i++) {
    row.push({
      id: nanoid(),
      value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    });
  }
  return row;
};

interface currentCell {
 id: string;
 value: number; 
}

export const getClosestCells = (matrix:any[], currentCell:currentCell, cellsCount:number) => {
  const allValues = matrix
    .map((el) => el.records)
    .flat()
    .filter((el) => el.id !== currentCell.id)

    .sort(
      (a, b) =>
        Math.abs(currentCell.value - a.value) -
        Math.abs(currentCell.value - b.value)
    );

  return allValues.slice(0, cellsCount);
};

export const createMatrix = (rows:number, columns:number) => {
  const initMatrixWithRows = [];
  for (let i = 0; i < rows; i++) {
    initMatrixWithRows.push([]);
  }
  const createdMatrix = initMatrixWithRows.map(() => {
    // const arrWithValues = [...rowArr];
    const newRow = createNewRow(columns);

    // for (let i = 0; i < columns; i++) {
    //   arrWithValues.push({
    //     id: nanoid(),
    //     value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    //   });
    // }
    return {
      records: newRow,
      sum: newRow.reduce((acc, curr) => acc + curr.value, 0),
    };
  });

  return createdMatrix;
};
