
/**
 * Resolves an Orkut image path to a storage relative path.
 * @param {string} path - The image path from data files (e.g. "imgs/community/123.jpg")
 * @returns {string} The storage path
 */
export const resolveOrkutImage = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // Handle specific user placeholder
    if (path.includes('user_thumb_medium')) {
        return 'orkut/user_thumb_medium.jpg';
    }

    // Normalize path
    let cleanPath = path;

    // Remove legacy "imgs/" prefix
    if (cleanPath.startsWith('imgs/')) {
        cleanPath = cleanPath.replace('imgs/', '');
    }

    // Map to storage structure (orkut/...)
    if (cleanPath.startsWith('community/') || cleanPath.startsWith('profile/') || cleanPath.startsWith('fotos/')) {
        return `orkut/${cleanPath}`;
    }

    // Fallback if path is just filename or unknown (try to guess or leave as is)
    // If it's just a filename like "123.jpg", previous loader tried both community and profile.
    // We can't easily guess. But most data includes directory.
    // If it allows relative paths and we assume base is orkut/community for unknown?
    // Let's assume most paths are well-formed now or allow fallback.
    // If it doesn't start with orkut/, prepend it?
    if (!cleanPath.startsWith('orkut/')) {
        // This might catch cases like "123.jpg". 
        // Let's assume community if ambiguous as per old loader preference?
        // Old loader: Try Key with community, then profile.
        // We can't do that check.
        // Let's return as is if we can't determine.
        return cleanPath;
    }

    return cleanPath;
};
