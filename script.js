const predictions = {
  1: ["The stars whisper your greatness. Leadership flows in your soul.", "Fate says: You were born to stand first."],
  2: ["The moon blesses you with harmony. You are the peacemaker.", "Luck follows your gentleness."],
  3: ["Your words will shape worlds. Your creativity is divine.", "Your dreams hold the blueprint of your future."],
  4: ["Your roots go deep. You are the silent strength behind every success.", "Destiny favors your foundation."],
  5: ["Winds carry your spirit far. Change excites your soul.", "You are luckiest when you leap."],
  6: ["A golden heart beats in you. You heal what others break.", "The universe listens to your kindness."],
  7: ["You walk with ancient wisdom. The unknown bends to your insight.", "Trust your inner voice—it’s not wrong."],
  8: ["Your presence commands. You hold the keys to great empires.", "Fortune aligns with your ambition."],
  9: ["You're the old soul reborn, a lighthouse to the lost.", "Destiny bows to your empathy."],
  10:["You are the unpredictable twist in fate’s story.", "Chaos dances at your feet, and luck follows."]
};

function revealPrediction() {
  const num = parseInt(document.getElementById('userNumber').value);
  const resultDiv = document.getElementById('result');
  const chime = document.getElementById('chime');
  if (num >= 1 && num <= 10) {
    const [fortune, luck] = predictions[num];

    resultDiv.innerHTML = `<strong>📜 "${fortune}"</strong><br><br><em>🍀 ${luck}</em>`;

    chime.currentTime = 0;
    chime.play();

    const speak = new SpeechSynthesisUtterance(`${fortune}. ${luck}`);
    speak.pitch = 1.2;
    speak.rate = 0.95;
    speak.voice = speechSynthesis.getVoices().find(v => v.name.includes("Google UK") || v.name.includes("English")) || null;
    speechSynthesis.speak(speak);
  } else {
    resultDiv.innerHTML = "❗ Please enter a number between 1 and 10.";
  }
}
