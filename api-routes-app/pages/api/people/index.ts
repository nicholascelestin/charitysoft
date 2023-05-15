// pages/api/sendText/index.ts
import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    
    const { text } = req.body;
    console.log('making the API call', text);

    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    };
    console.log('with this request', request);

    const response = await fetch('https://some-public-api.com', request);

    const data = await response.json();
    return res.status(200).json(data);
  }

  // Handle any other HTTP method
  return res.status(405).json({ error: 'Method not allowed' });
}
