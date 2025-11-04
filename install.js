import { spawn } from "child_process";

const services = [
  { name: "API-GATEWAY", cwd: "./Api-Gateway" },
  { name: "USER-SERVICE", cwd: "./services/User-Service" },
  { name: "CULTIVO-SERVICE", cwd: "./services/Cultivos-Service" },
  { name: "GANADO-SERVICE", cwd: "./services/Ganado-Service" },
  { name: "PARCELA-SERVICE", cwd: "./services/Parcela-Service" },
];

services.forEach(({ name, cwd }) => {
  const proc = spawn("npm", ["i"], { cwd, shell: true });

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
