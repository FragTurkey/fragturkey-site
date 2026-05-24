// FragTurkey — Cloudflare Worker
// Handles /api/videos as a server-side YouTube proxy.
// All other requests are served from static assets.

const CHANNEL_ID  = 'UCUTWQkIAi1G2wxRz7tgvmHA';
const PLAYLIST_ID = 'UU' + CHANNEL_ID.slice(2);
const MAX_RESULTS = 12;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/videos') {
      if (!env.YOUTUBE_API_KEY) {
        return json({ error: 'API key not configured' }, 500);
      }

      const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'
        + '?part=snippet'
        + `&playlistId=${PLAYLIST_ID}`
        + `&maxResults=${MAX_RESULTS}`
        + `&key=${env.YOUTUBE_API_KEY}`;

      try {
        const res  = await fetch(apiUrl);
        const data = await res.json();
        return json(data, 200);
      } catch (err) {
        return json({ error: 'Failed to fetch videos' }, 500);
      }
    }

    // Serve static assets for all other requests
    return env.ASSETS.fetch(request);
  },
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
