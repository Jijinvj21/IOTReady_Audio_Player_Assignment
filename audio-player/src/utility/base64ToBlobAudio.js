export const base64ToBlobAudio=(base64String, mimeType) =>{
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
    return new Blob([bytes], { type: mimeType });
}
