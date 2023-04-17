import React, { useState } from 'react';
import { generateStory, generateImage } from './api/openai';
import './App.css';

function App() {
  const [story, setStory] = useState('');
  const [protagonist, setProtagonist] = useState('');
  const [companionCount, setCompanionCount] = useState('');
  const [setting, setSetting] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerateStory = async () => {
    try {
      if (!protagonist || !companionCount || !setting) {
        alert('Please fill in all fields before generating a story.');
        return;
      }

      const prompt = `The protagonist is ${protagonist}. They have ${companionCount} companions. The story takes place in ${setting}.`;
      const maxTokens = 50;
      const generatedStory = await generateStory(prompt, maxTokens);
      setStory(generatedStory);

      const imagePrompt = `An illustration of the story: ${generatedStory}`;
      const generatedImageUrl = await generateImage(imagePrompt);
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error("Error in handleGenerateStory:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Protagonist: </label>
          <input value={protagonist} onChange={(e) => setProtagonist(e.target.value)} />
        </div>
        <div>
          <label>Companion count: </label>
          <input value={companionCount} onChange={(e) => setCompanionCount(e.target.value)} />
        </div>
        <div>
          <label>Setting: </label>
          <input value={setting} onChange={(e) => setSetting(e.target.value)} />
        </div>
        <button onClick={handleGenerateStory}>Generate Story</button>
        <p>{story}</p>
        {imageUrl && <img src={imageUrl} alt="Generated Illustration" />}
      </header>
    </div>
  );
}

export default App;
