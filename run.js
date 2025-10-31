import { spawn } from "child_process";
import path from "path";

const services = [
  { name: "API-GATEWAY", cwd: "./Api-Gateway" },
  { name: "USER-SERVICE", cwd: "./User-Service" },
  { name: "AUTH-SERVICE", cwd: "./Auth-Service" },
  { name: "CHATBOT-SERVICE", cwd: "./ChatBot-Service" },
  { name: "CULTIVO-SERVICE", cwd: "./Cultivos-Service" },
  { name: "GANADO-SERVICE", cwd: "./Ganado-Service" },
  { name: "PARCELA-SERVICE", cwd: "./Parcela-Service" },
];

services.forEach(({ name, cwd }) => {
  const proc = spawn("npm", ["run", "dev"], { cwd, shell: true });

  proc.stdout.on("data", (data) => {
    process.stdout.write(`[${name}] ${data}`);
  });

  proc.stderr.on("data", (data) => {
    process.stderr.write(`[${name} ERROR] ${data}`);
  });

  proc.on("close", (code) => {
    console.log(`[${name}] finalizado con código ${code}`);
  });
});
