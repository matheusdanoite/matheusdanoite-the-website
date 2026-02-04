export async function onRequest(context) {
    try {
        const apiKey = context.env.XBL_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'CONFIG_ERROR: API Key not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const headers = {
            'X-Authorization': apiKey,
            'Accept': 'application/json'
        };

        // 1. Fetch Account
        const accountResponse = await fetch('https://xbl.io/api/v2/account', { headers });

        if (!accountResponse.ok) {
            const errText = await accountResponse.text();

            if (accountResponse.status === 401) {
                return new Response(JSON.stringify({ error: 'API_KEY_INVALID: Chave da xbl.io inválida ou expirada.' }), { status: 401 });
            }
            if (accountResponse.status === 429) {
                return new Response(JSON.stringify({ error: 'RATE_LIMIT: Limite de requisições da xbl.io atingido.' }), { status: 429 });
            }

            return new Response(JSON.stringify({ error: `Xbox Account API Error (${accountResponse.status}): ${errText}` }), {
                status: accountResponse.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const accountData = await accountResponse.json();

        // 2. Fetch History
        let historyData = [];
        try {
            const historyResponse = await fetch('https://xbl.io/api/v2/activity/history', { headers });

            if (historyResponse.ok) {
                const json = await historyResponse.json();

                if (json.activityItems && Array.isArray(json.activityItems)) {
                    historyData = json.activityItems.map(item => ({
                        name: item.contentTitle,
                        displayImage: item.contentImageUri,
                        date: item.date,
                        type: item.activityItemType,
                        description: item.shortDescription || item.description
                    }));
                }
            }
        } catch (histErr) {
            // Ignore history errors
        }

        return new Response(JSON.stringify({
            account: accountData,
            history: historyData
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: `INTERNAL_ERROR: ${error.message}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
