// Cloudflare Pages Function — YouTube API proxy
// Keeps the API key server-side as an environment variable.
// Set YOUTUBE_API_KEY in Cloudflare Pages → Settings → Environment Variables.

export async function onRequest(context) {
  const API_KEY      = context.env.YOUTUBE_API_KEY;
  const CHANNEL_ID   = 'UCUTWQkIAi1G2wxRz7tgvmHA';
  const PLAYLIST_ID  = 'UU' + CHANNEL_ID.slice(2);
  const MAX_RESULTS  = 12;

  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = 'https://www.googleapis.com/youtube/v3/playlistItems'
    + '?part=snippet'
    + `&playlistId=${PLAYLIST_ID}`
    + `&maxResults=${MAX_RESULTS}`
    + `&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data     = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': 'https://fragturkey.com',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch videos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
