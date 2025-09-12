module.exports = {
  apps: [{
    name: "demo-ci",
    script: "index.js",
    instances: 1,
    env: { PORT: 3000, NODE_ENV: "development" },
    env_production: { PORT: 3000, NODE_ENV: "production" }
  }]
}
