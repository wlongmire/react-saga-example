import { BASE_URL, makeUrl, getRequestInit } from './util';
import { Attachment } from '../models';
import { getAuthToken } from '../../auth/util';

export const uploadFile = (filetype: string, objectKey: string, file: any, url: string): Promise<any> => {

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
            if (!response.ok) {
                throw new Error('Upload was unsuccessful');
            } else {
                let attachment: Attachment = {
                    key: objectKey,
                    fileType: filetype,
                    fileName: ''
                };
                return attachment;
            }
        });
};

export const getS3UploadURL = (uploadContentType: string, channelId: string): Promise<any> => {
    const token = getAuthToken();
    const requestInit: RequestInit = {
        method: 'POST',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            'channelId': channelId,
            'uploadContentType': uploadContentType
        })
    };

    const basePath = 'attachments/v1/urls';
    const url = makeUrl(basePath);
    const request = new Request(url, requestInit);
    return fetch(request)
        .then((response: any) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error requesting s3 attachment object');
            }
        })
        .then((result: any) => {
            if (result.object_key) {
                const resultUrl = result.url;
                const objectKey = result.object_key;
                let attachment = { resultUrl, objectKey };
                return attachment;
            } else {
                throw new Error('Error requesting s3 attachment object'); 
            }
        });
};

export const fetchDownloadUrl = (channelId: number, objectKey: string): Promise<string> => {
    const requestInit = getRequestInit('GET');
    const url = `${BASE_URL}/attachments/v1/urls?channel_id=${channelId}&object_key=${objectKey}`;
    return fetch(url, requestInit)
        .then((response: any) => {
            if (!response.ok) {
                throw new Error('Error retrieving download URL');
            }
            return response.json();
        }).then((result: any) => {
            if (result.url) {
                const urlString = result.url;
                return urlString;
            } else {
                throw new Error('Error retrieving download URL');
            }
        });
};