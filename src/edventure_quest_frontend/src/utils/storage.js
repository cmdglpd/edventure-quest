import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// export function uploadFile(fileName, file) {
//     let success = false
//     const storage = getStorage();
//     const storageRef = ref(storage, fileName);

//     // 'file' comes from the Blob or File API
//     uploadBytes(storageRef, file).then((snapshot) => {
//         console.log(snapshot);
//         success = true
//     });

//     return success
// }

export function uploadFile (file, fileName) {
    return new Promise((resolve, reject) => {
        if (!file) {
            console.log("No file provided");
            return reject("No file provided");
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            const storage = getStorage();
            const storageRef = ref(storage, fileName);

            try {
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(
                    ref(storage, `gs://edventure-quest.appspot.com/${fileName}`)
                );
                resolve(url);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    });
};