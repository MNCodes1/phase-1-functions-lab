// Code your solution in this file!
// 1. Returns number of blocks from HQ (assumed at block 42)
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

// 2. Converts blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

// 3. Calculates distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates fare price based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare
  } else {
    return 'cannot travel that far'; // Over 2500 feet not allowed
  }
}