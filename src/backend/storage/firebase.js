const {firebaseConfig} = require("../config/config");
const { initializeApp } = require("firebase/app");
const {getStorage, ref, uploadBytes, getDownloadURL} = require("firebase/storage");

const log = require("../log");
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseConfig.bucketUrl);

// Initialize Firebase
const uploadFile = (file, next) => {
   
    const storageReference = ref(storage, getUniqueFileName(file.originalname))
    return uploadBytes(storageReference, file.buffer).then(async (snapshot)=>{
        return getDownloadURL(snapshot.ref);
    }).then((downloadUrl)=>{
        log.info(`file uploaded and url can be accessed via = ${downloadUrl}`);
        return next(null, downloadUrl);
    }).catch((err)=>{
        log.error(err);
        return next(err, null);
    });
}

function getUniqueFileName(fileName){
    let delimeterIndex = fileName.lastIndexOf(".");
    return fileName.slice(0, delimeterIndex) 
            + "_"
            + new Date().valueOf() 
            +  fileName.slice(delimeterIndex, fileName.length);
}

module.exports = { uploadFile }

