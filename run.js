import { spawn } from "child_process";
import path from "path";

const services = [
  { name: "API-GATEWAY", cwd: "./Api-Gateway" },
  { name: "USER-SERVICE", cwd: "./User-Service" },
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
