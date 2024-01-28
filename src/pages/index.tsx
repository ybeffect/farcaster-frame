import { BASE_URL } from '@/utils'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Who Wants to Be a Millionaire - Play Now!" />
        <meta property="og:image" content={`${BASE_URL}/millionlogo.jpeg`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${BASE_URL}/millionlogo.png`} />
        <meta property="fc:frame:button:1" content="Play Now!" />
        <meta property="fc:frame:post_url" content={`${BASE_URL}/api/post`} />
      </Head>
    </>
  )
}
// commit to deploy


// export default function Home() {
//   return (
//     <>
//       <Head>
//         <meta property="og:title" content="Frame" />
//         <meta property="og:image" content={`${BASE_URL}/question.jpg`} />
//         <meta property="fc:frame" content="vNext" />
//         <meta property="fc:frame:image" content={`${BASE_URL}/question.jpg`} />
//         <meta property="fc:frame:button:1" content="Yes" />
//         <meta property="fc:frame:button:2" content="No" />
//         <meta property="fc:frame:post_url" content={`${BASE_URL}/api/post`} />
//       </Head>
//     </>
//   )
// }