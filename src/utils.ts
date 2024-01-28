export const BASE_URL = process.env.BASE_URL;

// Simple function to generate a frame with an image and up to four buttons
export function generateFarcasterFrame(image: string, buttons: string[]) {
  const buttonMetaTags = buttons.map((buttonText, index) => 
    `<meta property="fc:frame:button:${index + 1}" content="${buttonText}" />`
  ).join('\n');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${BASE_URL}/${image}" />
      ${buttonMetaTags}
    </head>
    <body>
    </body>
    </html>
  `;
}



// export const BASE_URL = process.env.BASE_URL

// // generate an html page with the relevant opengraph tags
// export function generateFarcasterFrame(image: string, choice: number) {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta property="fc:frame" content="vNext" />
//       <meta property="fc:frame:image" content="${image}" />
//       <meta property="fc:frame:post_url" content="${BASE_URL}/api/post" />

//       ${
//         choice === 2
//           ? '<meta property="fc:frame:button:1" content="Yes" />'
//           : ''
//       }
//     </head>
//     <body>
      
//     </body>
//     </html>
//   `
// }