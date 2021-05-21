module.exports = {
  loadName: "loadOnTerminal",
  loadRender: function (speed = 1, sign = ".", NumberOfSign = 10) {
    let currentTime = 0;
    const duration = NumberOfSign * (speed * 1000);
    setInterval(() => {
      if (currentTime < duration) {
        process.stdout.write((sign = sign.length > 1 ? sign[0] : sign));
      } else if (currentTime === duration) {
        console.log("\nThe loader is done !");
      }
      currentTime += speed * 1000;
    }, speed * 1000);
    return "Loader start : ";
  },
};
