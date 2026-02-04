export const fontMappings = [
    {
        name: "Bubbles",
        lower: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
        upper: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
        digits: "⓪①②③④⑤⑥⑦⑧⑨"
    },

    {
        name: "Script Bold",
        lower: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
        upper: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
        digits: "0123456789"
    },
    {
        name: "Fraktur",
        lower: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
        upper: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
        digits: "0123456789"
    },

    {
        name: "Double Struck",
        lower: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
        upper: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
        digits: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
    },

    {
        name: "Full Width",
        lower: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
        upper: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
        digits: "０１２３４５６７８９"
    }
];

const normalLower = "abcdefghijklmnopqrstuvwxyz";
const normalUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const normalDigits = "0123456789";

export const normalizeText = (text) => {
    if (!text) return "";
    let normalized = text;

    // Iterate through all mappings and replace fancy chars with normal ones
    fontMappings.forEach(mapping => {
        // Lowercase
        if (mapping.lower) {
            const chars = Array.isArray(mapping.lower) ? mapping.lower : [...mapping.lower];
            chars.forEach((char, index) => {
                if (index < normalLower.length) {
                    try {
                        normalized = normalized.split(char).join(normalLower[index]);
                    } catch (e) {
                        // Fallback
                    }
                }
            });
        }
        // Uppercase
        if (mapping.upper) {
            const chars = Array.isArray(mapping.upper) ? mapping.upper : [...mapping.upper];
            chars.forEach((char, index) => {
                if (index < normalUpper.length) {
                    try {
                        normalized = normalized.split(char).join(normalUpper[index]);
                    } catch (e) { }
                }
            });
        }
        // Digits
        if (mapping.digits) {
            const chars = Array.isArray(mapping.digits) ? mapping.digits : [...mapping.digits];
            chars.forEach((char, index) => {
                if (index < normalDigits.length) {
                    try {
                        normalized = normalized.split(char).join(normalDigits[index]);
                    } catch (e) { }
                }
            });
        }
    });

    // 4. Re-compose (NFC) to join base + combining back to normal form (e.g. 'a' + '´' -> 'á')
    return normalized.normalize("NFC");
};

export const transformText = (text, fontName) => {
    if (!text) return "";

    const mapping = fontMappings.find(m => m.name === fontName);
    if (!mapping) return text;

    // 1. Decompose to separate base char from accent (e.g. 'á' -> 'a' + '´')
    const decomposed = text.normalize("NFD");

    // Use spread syntax to split by code point, not code unit
    return [...decomposed].map(char => {
        const lowerIndex = normalLower.indexOf(char);
        const upperIndex = normalUpper.indexOf(char);
        const digitIndex = normalDigits.indexOf(char);

        if (lowerIndex !== -1) {
            // Handle array based mappings or string based.
            // When accessing string by index, we must be careful with surrogate pairs.
            // Ideally mappings should be arrays of strings, but if they are strings, we need to convert to array first.
            const target = Array.isArray(mapping.lower) ? mapping.lower : [...mapping.lower];
            return target[lowerIndex] || char;
        }
        if (upperIndex !== -1) {
            const target = Array.isArray(mapping.upper) ? mapping.upper : [...mapping.upper];
            return target[upperIndex] || char;
        }
        if (digitIndex !== -1 && mapping.digits) {
            const target = Array.isArray(mapping.digits) ? mapping.digits : [...mapping.digits];
            return target[digitIndex] || char;
        }
        // If it's a combining mark or other symbol, pass it through unchanged
        return char;
    }).join('');
};
