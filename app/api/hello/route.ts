import { limiter } from '../config/lilmiter';

export async function GET(req: Request) {
  const origin = req.headers.get('origin');

  const remaining = await limiter.removeTokens(1);
  console.log('remaining:', remaining);

  if (remaining < 0)
    return new Response(null, {
      status: 429,
      statusText: 'Too Many Requests',
      headers: {
        'Access-Control-Allow-Origin': origin || '*', // Required for CORS support to work
        'Content-Type': 'text/plain',
      },
    });

  return new Response('Hello World');
}
