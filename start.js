const app = require("./src");
const colors = require("colors");

colors.enable();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `⚡️[Server] running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
