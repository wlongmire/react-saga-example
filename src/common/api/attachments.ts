import { makeUrl } from './util';
import { Attachment } from '../models';

export const uploadFile = (filetype: string, objectKey: string, file: any, url: string): any => {

    const requestInit: RequestInit = {
        method: 'PUT',
        body: file,
        headers: {
            'Content-Type': filetype
        },
        mode: 'cors',
    };
    const request = new Request(url, requestInit);
    return fetch(request)
        .then((response: any) => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then((err: Error) => {
                    console.log(err);
                    throw err
                })
            }
        })
        .then(result => {
            switch (result.status) {
                case 200:
                    console.log("");
                    let attachment: Attachment = {
                        key: objectKey,
                        fileType: filetype,
                        fileName: ""
                    }
                    return Promise.resolve(attachment);
                default:
                console.log(`Error result ${result.error}`)
                    return Promise.reject(result.error);
            }
        })
        .catch((error) => {
            return Promise.reject(error);
        })


}

 export const getS3UploadURL = (uploadContentType: string, channelId: string): Promise<any> => {
    const requestInit: RequestInit = {
        method: 'POST',
        headers: {
            'Authorization': `Token ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            'channelId': channelId,
            'uploadContentType': uploadContentType
        })
    };

    const basePath = "attachments/v1/urls";
    const url = makeUrl(basePath);
    const request = new Request(url, requestInit);
    return fetch(request)
        .then((response: any) =>{
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then((err: Error) => {
                    console.log(err);
                    throw err;
                })
            }
        })
        .then(result => {
            switch (result.status) {
                case 200:
                    const url = result.url;
                    const objectKey = result.object_key;
                    console.log(`success ${objectKey} `, url);
                    return Promise.resolve({'objectKey': objectKey, 'url': url})
                default:
                    console.log(`Error result ${result.error}`);
                    return Promise.reject(result.error);
            }
        })
        .catch((error) => {
            // const errorMessage = `Something bad happened.`;
            return Promise.reject(error);
        })
}