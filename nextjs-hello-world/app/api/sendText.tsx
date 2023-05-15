// Import the Next.js types for API routes
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json("{}")
}