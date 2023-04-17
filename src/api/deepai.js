import axios from 'axios';

const deepaiApiKey = '';

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
