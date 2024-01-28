import type { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL, generateFarcasterFrame } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Extract the button index and determine the next frame based on that
  const { buttonIndex } = req.body;
  
  // Define the next action for each button
  const actions = [
    { image: 'question.jpg', buttons: ["A", "B", "C", "D"] },
    { image: 'correct.jpeg', buttons: ["Next Question"] },
    { image: 'incorrect.jpeg', buttons: ["Next Question"] }
  ];

  // Choose the action based on the button index
  const action = actions[buttonIndex] || actions[0];
  
  // Generate the frame with the selected action
  const html = generateFarcasterFrame(action.image, action.buttons);
  return res.status(200).setHeader('Content-Type', 'text/html').send(html);
}


// import type { NextApiRequest, NextApiResponse } from 'next'

// import { BASE_URL, generateFarcasterFrame } from '@/utils'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     res.status(405).json({ error: 'Method Not Allowed' })
//     return
//   }

//   const signedMessage = req.body as {
//     untrustedData: {
//       fid: number
//       url: string
//       messageHash: string
//       timestamp: number
//       network: number
//       buttonIndex: number
//       castId: { fid: number; hash: string }
//     }
//     trustedData: {
//       messageBytes: string
//     }
//   }

//   const choice = signedMessage.untrustedData.buttonIndex

//   let html: string = ''

//   if (choice === 1) {
//     html = generateFarcasterFrame(`${BASE_URL}/happy.jpg`, choice)
//   } else {
//     html = generateFarcasterFrame(`${BASE_URL}/threat.jpg`, choice)
//   }

//   return res.status(200).setHeader('Content-Type', 'text/html').send(html)
// }
