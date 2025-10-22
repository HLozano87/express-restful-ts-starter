import "dotenv/config";
import http from "node:http";
import app from "./app";

const PORT = process.env.PORT || 3000;
const SERVER = http.createServer(app);

SERVER.listen(PORT, () => {
  console.log(`Server listen in http://localhost:${PORT}`);
});
