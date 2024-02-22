export const base64ToBlobAudio = (base64String, mimeType) => {
    return new Promise((resolve, reject) => {
        if (!base64String || !mimeType) {
            reject(new Error("Base64 string and mimeType are required."));
        }

        // Remove data URL prefix
        const base64WithoutPrefix = base64String.split(',')[1];

        // Convert base64 to binary
        const binaryString = window.atob(base64WithoutPrefix);
        const binaryLength = binaryString.length;
        const bytes = new Uint8Array(binaryLength);
        for (let i = 0; i < binaryLength; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Create Blob from binary
        const blob = new Blob([bytes], { type: mimeType });
        resolve(blob);
    });
};
