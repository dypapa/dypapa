// openai.js

import axios from 'axios';

const openaiApiKey = '';
const deepaiApiKey = '';

export const generateStory = async (prompt, maxTokens) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions', // 올바른 엔드포인트로 변경
      {
        prompt: prompt,
        max_tokens: maxTokens,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return '';
  }
};

export const generateImage = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.deepai.org/api/text2img',
      {
        prompt: prompt,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': deepaiApiKey,
        },
      }
    );

    return response.data.output_url;
  } catch (error) {
    console.error(error);
    return '';
  }
};
