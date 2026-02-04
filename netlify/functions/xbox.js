exports.handler = async function (event, context) {
    try {
        // node-fetch is not needed in Node 18+ (Netlify uses 20/22)
        const apiKey = process.env.XBL_API_KEY;

        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'API Key not configured' })
            };
        }

        const [accountResponse, historyResponse] = await Promise.all([
            fetch('https://xbl.io/api/v2/account', {
                headers: {
                    'X-Authorization': apiKey,
                    'X-Contract': '100',
                    'Accept': 'application/json'
                }
            }),
            fetch('https://xbl.io/api/v2/player/title/history', {
                headers: {
                    'X-Authorization': apiKey,
                    'X-Contract': '100',
                    'Accept': 'application/json'
                }
            })
        ]);

        if (!accountResponse.ok) {
            return {
                statusCode: accountResponse.status,
                body: JSON.stringify({ error: `Xbox Account API error: ${accountResponse.statusText}` })
            };
        }

        const accountData = await accountResponse.json();
        let historyData = {};

        // History might fail if privacy settings block it, so we handle it softly
        if (historyResponse.ok) {
            historyData = await historyResponse.json();
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow CORS for development
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: accountData,
                history: historyData
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
