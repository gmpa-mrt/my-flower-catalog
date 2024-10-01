export const config = {
    base_url: import.meta.env.VITE_API_BASE_URL,
    key: import.meta.env.VITE_API_KEY,
}

export class ApiError extends Error {
    constructor(url, status) {
        super(`'${url}' returned ${status}`);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }
        this.name = 'ApiError';
        this.status = status;
    }
}

export async function fetchJson(url, options) {
    const response = await fetch(`${config.base_url}${url}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://trefle.io',
        }, options
    });
    if (!response.ok) {
        throw new ApiError(url, response.status);
    }
    return await response.json();
}

