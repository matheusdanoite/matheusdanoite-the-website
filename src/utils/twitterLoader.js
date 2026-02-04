
import { fetchJsonFromStorage } from './storageLoader';

/**
 * Resolves a Twitter media path to a storage relative path.
 * Effectively just cleans the path string.
 * @param {string} path - The relative path from the data file
 * @returns {string} The storage path
 */
export const resolveTwitterImage = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // Normalize path to remove /src/data/ prefix which was local
    let cleanPath = path;
    if (cleanPath.startsWith('/src/data/')) {
        cleanPath = cleanPath.replace('/src/data/', '');
    } else if (cleanPath.startsWith('src/data/')) {
        cleanPath = cleanPath.replace('src/data/', '');
    }

    // Also remove leading slash if present
    if (cleanPath.startsWith('/')) cleanPath = cleanPath.substring(1);

    if (cleanPath.startsWith('tweets_media/') || cleanPath.startsWith('profile_media/')) {
        return `twitter/data/${cleanPath}`;
    }

    return cleanPath;
};

/**
 * Loads a specific tweet chunk by index from Storage.
 * @param {number} index
 * @returns {Promise<Array>}
 */
export const loadTweetsChunk = async (index) => {
    return fetchJsonFromStorage(`twitter/chunks/chunk_${index}.json`);
};

export const getManifest = async () => {
    return fetchJsonFromStorage('twitter/chunks/manifest.json');
};
