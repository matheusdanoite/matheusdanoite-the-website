import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

/**
 * Cache para URLs de download para evitar chamadas repetidas
 */
const urlCache = new Map();

/**
 * Obtém a URL de download para um caminho no Storage.
 * Retorna uma URL vazia ou placeholder se falhar ou se o storage não estiver configurado.
 * @param {string} path - Caminho relativo no bucket (ex: "instagram/posts/imagem.jpg")
 * @returns {Promise<string>}
 */
export const getStorageUrl = async (path) => {
    if (!storage || !path) return "";
    if (path.startsWith("http")) return path;

    // Normalizar caminho removendo barras iniciais ou prefixos locais antigos
    let cleanPath = path;
    if (cleanPath.startsWith("/src/data/")) {
        cleanPath = cleanPath.replace("/src/data/", "");
    } else if (cleanPath.startsWith("src/data/")) {
        cleanPath = cleanPath.replace("src/data/", "");
    }

    if (cleanPath.startsWith("/")) cleanPath = cleanPath.substring(1);

    if (urlCache.has(cleanPath)) {
        return urlCache.get(cleanPath);
    }

    try {
        const storageRef = ref(storage, cleanPath);
        const url = await getDownloadURL(storageRef);
        urlCache.set(cleanPath, url);
        return url;
    } catch (error) {
        console.error(`[StorageLoader] Error fetching URL for ${cleanPath}:`, error);
        return "";
    }
};

/**
 * Baixa e faz parse de um arquivo JSON do Storage.
 * @param {string} path - Caminho relativo no bucket
 * @returns {Promise<any>}
 */
export const fetchJsonFromStorage = async (path) => {
    const url = await getStorageUrl(path);
    if (!url) return null;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`[StorageLoader] Error fetching JSON ${path}:`, error);
        return null;
    }
};
