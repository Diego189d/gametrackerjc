require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Game = require('./models/Game');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || process.env.MONGO || 'mongodb://localhost:27017/gametracker';
mongoose.connect(MONGO).then(()=> console.log('Connected to MongoDB')).catch(err=> console.error('MongoDB error', err));

// Health
app.get('/health', (req,res)=> res.json({ok:true, env: process.env.NODE_ENV || 'dev'}));

// CRUD games
app.get('/api/games', async (req,res)=>{
  const { search, platform, status } = req.query;
  const filter = {};
  if(search) filter.name = { $regex: search, $options: 'i' };
  if(platform) filter.platform = platform;
  if(status) filter.status = status;
  const games = await Game.find(filter).sort({ createdAt: -1 });
  res.json(games);
});

app.post('/api/games', async (req,res)=>{
  try{
    const g = new Game(req.body);
    await g.save();
    res.status(201).json(g);
  }catch(err){
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/games/:id', async (req,res)=>{
  try{
    const g = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(g);
  }catch(err){
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/games/:id', async (req,res)=>{
  try{
    await Game.findByIdAndDelete(req.params.id);
    res.json({ ok:true });
  }catch(err){
    res.status(400).json({ error: err.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log('Server running on', port));
