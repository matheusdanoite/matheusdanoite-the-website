export async function onRequest(context) {
    const API_KEY = context.env.LASTFM_API_KEY;
    const USERNAME = context.env.LASTFM_USERNAME;
    const LIMIT = 5;

    if (!API_KEY || !USERNAME) {
        return new Response(JSON.stringify({ error: 'Environment variables not collected.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=${LIMIT}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return new Response(response.statusText, { status: response.status });
        }
        const data = await response.json();

        const tracks = data.recenttracks.track.map(track => ({
            name: track.name,
            artist: track.artist['#text'],
            album: track.album['#text'],
            image: track.image[1]['#text'],
            url: track.url,
            nowPlaying: track['@attr']?.nowplaying === 'true'
        }));

        return new Response(JSON.stringify(tracks), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed fetching data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
