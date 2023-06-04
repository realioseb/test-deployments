import http from "http";
import { generateRandomNumber } from "./utils";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const number = generateRandomNumber();
  res.end(`${number}) Hello World v2"`);
});

server.listen(PORT, () => {
  console.log(`server start at port ${PORT}`);
});
