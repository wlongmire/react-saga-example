/**
 * Makes a url from the server environment variables
 * with the specified base path and extended path.
 * @param basePath 
 * @param extendedPath 
 */
export const makeUrl = (basePath: string, extendedPath?: string) => {
    const host = process.env.REACT_APP_API_HOST;
    const port = process.env.REACT_APP_API_PORT;
    
    let url = `https://${host}`;

    if (port) {
        url = `${url}:${port}`;
    }

    url = `${url}/${basePath}`;

    if (extendedPath) {
        url = `${url}/${extendedPath}`;
    }

    return url;
};