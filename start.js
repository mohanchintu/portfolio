const { spawn } = require('child_process');
const path = require('path');

console.log('====================================================');
console.log('⚡ STARTING MOHAN P // SCI-FI HUD PORTFOLIO SYSTEM');
console.log('====================================================');

// 1. Start Node.js Express Backend
const server = spawn('node', ['server.js'], {
  cwd: path.join(__dirname, 'server'),
  stdio: 'inherit',
  shell: true
});

// 2. Start React Vite Frontend
const client = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'client'),
  stdio: 'inherit',
  shell: true
});

const handleExit = () => {
  server.kill();
  client.kill();
  process.exit();
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
