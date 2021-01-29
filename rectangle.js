const getRectangle = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    callback(
      new Error(
        `Rectangle dimensions must greater than zero. Recieved: ${x}, ${y}`
      )
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x + y,
        }),
      2000
    );
  }
};

export default getRectangle;
