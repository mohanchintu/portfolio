const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper to read JSON data safely
const readJson = (filename) => {
  const filePath = path.join(__dirname, 'data', filename);
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

// In-memory submissions store (persisted in session)
const challengesSubmitted = [];
const contactMessages = [];

// Profile endpoint
app.get('/api/profile', (req, res) => {
  try {
    const profile = readJson('profile.json');
    res.json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch profile' });
  }
});

// Logs (Case Studies) endpoint
app.get('/api/logs', (req, res) => {
  try {
    const logs = readJson('logs.json');
    res.json({ success: true, data: logs });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch logs' });
  }
});

// Achievements endpoint
app.get('/api/achievements', (req, res) => {
  try {
    const achievements = readJson('achievements.json');
    res.json({ success: true, data: achievements });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch achievements' });
  }
});

// Creations / Projects endpoint
app.get('/api/creations', (req, res) => {
  try {
    const creations = readJson('creations.json');
    res.json({ success: true, data: creations });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch creations' });
  }
});

// Quests endpoint
app.get('/api/quests', (req, res) => {
  try {
    const quests = readJson('quests.json');
    res.json({ success: true, data: quests });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch quests' });
  }
});

// Challenge Me submission endpoint
app.post('/api/challenges', (req, res) => {
  const { challengerName, email, challengeTitle, challengeDetails, difficulty } = req.body;

  if (!challengerName || !challengeTitle || !challengeDetails) {
    return res.status(400).json({
      success: false,
      message: 'Challenger name, title, and details are required.'
    });
  }

  const newChallenge = {
    id: `ch-${Date.now()}`,
    challengerName,
    email: email || 'Anonymous Operator',
    challengeTitle,
    challengeDetails,
    difficulty: difficulty || 'EPIC',
    status: 'RECEIVED & LOGGED IN SYSTEM',
    timestamp: new Date().toISOString()
  };

  challengesSubmitted.push(newChallenge);
  console.log(`[SYSTEM ALERT] New Challenge Received: "${challengeTitle}" from ${challengerName}`);

  res.status(201).json({
    success: true,
    message: 'Challenge accepted and logged into Mohan\'s active quest line!',
    challenge: newChallenge,
    rewardCoins: 50
  });
});

// Contact message endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.'
    });
  }

  const newMessage = {
    id: `msg-${Date.now()}`,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  contactMessages.push(newMessage);
  console.log(`[TRANSMISSION RECEIVED] From: ${name} (${email}): ${message}`);

  res.status(201).json({
    success: true,
    message: 'Transmission received. Mohan will establish contact shortly.',
    data: newMessage
  });
});

// Action reward endpoint (e.g. mini game win or quest interaction)
app.post('/api/action/reward', (req, res) => {
  const { actionType, points } = req.body;
  const reward = Math.min(Math.max(parseInt(points, 10) || 10, 5), 100);

  res.json({
    success: true,
    action: actionType || 'GENERIC_ACHIEVEMENT',
    awardedCoins: reward,
    message: `+${reward} COINS CREDITED TO SYSTEM WALLET`
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'MOHAN_SCI_FI_PORTFOLIO_CORE',
    serverTime: new Date().toTimeString().split(' ')[0],
    challengesCount: challengesSubmitted.length,
    messagesCount: contactMessages.length
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 SCI-FI PORTFOLIO BACKEND ONLINE ON PORT ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
});
