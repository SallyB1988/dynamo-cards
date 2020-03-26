/**
 * Creates an array containing a rummikub tiles (2 sets each, numbers 1-13, 4 colors and 2 jokers)
 */

const RED = "#c70039";
const YELLOW = "#ffc300";
const BLUE = "#011f4b";
const BLACK = "#0e1111";

const createTiles = () => {
  let tiles = [];
  const colors = [RED, YELLOW, BLUE, BLACK];
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < values.length; j++) {
      for (let k = 1; k < 2; k++) {
        tiles.push({
          name: `${k}-${colors[i]}-${values[j]}`,
          color: colors[i],
          value: values[j]
        });
      }
    }
  }
  tiles.push({
    name: "1-J",
    color: BLACK,
    value: 0
  });

  tiles.push({
    name: "2-J",
    color: RED,
    value: 0
  });

  return tiles;
};

/**
 * Removes first tile from array. Returns an object containing the tile and the remaining array
 * @param {*} arr : array of strings representing tiles
 */
const drawOne = arr => {
  if (arr.length === 0) {
    return null;
  }
  const tile = arr.shift();
  return { tile: tile, remaining: arr };
};

/**
 * Shuffles elements in an array. Returns shuffled array.
 * @param {*} arr
 */
const shuffleTiles = arr => {
  let shuffled = [];
  while (arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);
    shuffled.push(arr[index]);
    arr.splice(index, 1);
  }
  return shuffled;
};

module.exports = {
  createTiles,
  drawOne,
  shuffleTiles
};
