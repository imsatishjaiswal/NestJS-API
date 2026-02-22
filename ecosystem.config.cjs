<<<<<<< HEAD
module.exports = {
  apps: [
    {
      name: "backend",
      script: "./dist/main.js", // TypeScript compiled output
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "500M",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
    },
  ],
};
=======
module.exports = {
  apps: [
    {
      name: "backend",
      script: "./dist/main.js", // TypeScript compiled output
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "500M",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
    },
  ],

};
>>>>>>> 96881308955d14ec55ea26cbac25a77af2418e22
