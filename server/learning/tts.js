const textToSpeech = require('gtts');
const express = require('express');
const router = express.Router();
router.get('/tts/:word', (req,res)=>{
  const gtts = new textToSpeech(req.params.word, 'de');
  gtts.save('speech.mp3', ()=>res.send('Done'));
});
module.exports = router;
