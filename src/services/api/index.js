import axios from "axios";

export const api = axios.create({
  baseURL: "https://hotel-server-1.ngrok-hosting.repl.co/api/mobile",
});

