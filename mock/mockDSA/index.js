// const cases = [
//   [4, [0, -2], [1, 0], [-1, 0], [0, 2]],
//   [3, [0, 2], [-3, 0], [0, -1]],
//   [1, [0, 0]],
// ];

// lazyGuide(3, cases);

// function lazyGuide(numCases, cases) {
//   for (let i = 0; i < numCases; i++) {
//     const n = cases[i][0];
//     const spots = cases[i].slice(1);

//     const xSpots = spots.filter((spot) => spot[1] === 0).map((spot) => spot[0]);
//     const ySpots = spots.filter((spot) => spot[0] === 0).map((spot) => spot[1]);

//     xSpots.sort((a, b) => a - b);
//     ySpots.sort((a, b) => a - b);

//     let totalDist = 0;

//     for (let j = 1; j < xSpots.length; j++) {
//       totalDist += Math.abs(xSpots[j] - xSpots[j - 1]);
//     }

//     for (let j = 1; j < ySpots.length; j++) {
//       totalDist += Math.abs(ySpots[j] - ySpots[j - 1]);
//     }

//     totalDist +=
//       Math.abs(spots[spots.length - 1][0]) +
//       Math.abs(spots[spots.length - 1][1]);

//     console.log(totalDist);
//   }
// }

function oddAdjacentElements(n, m, arr) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (
        i > 0 &&
        j > 0 &&
        Math.abs(arr[i][j] % 2) === 1 &&
        Math.abs(arr[i - 1][j] % 2) === 1 &&
        Math.abs(arr[i][j - 1] % 2) === 1 &&
        Math.abs(arr[i - 1][j - 1] % 2) === 1
      ) {
        arr[i][j] = -arr[i][j];
        arr[i - 1][j] = -arr[i - 1][j];
        arr[i][j - 1] = -arr[i][j - 1];
        arr[i - 1][j - 1] = -arr[i - 1][j - 1];
      }
    }
  }
  return arr;
}

// Example usage
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result = oddAdjacentElements(3, 3, arr);

console.log(result);
