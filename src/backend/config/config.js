const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
    
} = process.env;

// apiKey: "AIzaSyCZ57ZUsi9qESKFOnu_DTYOBs1CiYq5QV4",
// authDomain: "rentaday-fb3f9.firebaseapp.com",
// projectId: "rentaday-fb3f9",
// storageBucket: "rentaday-fb3f9.appspot.com",
// messagingSenderId: "893480952696",
// appId: "1:893480952696:web:61816e3515c7d70ec01e8d",
// measurementId: "G-SF0Y48Y0BM"

module.exports = {
    firebaseConfig:{
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
    },
    mongoConfig:{
        "connectionUri": "mongodb+srv://jeriljames:jeriljames@first-cluster.mis1q.mongodb.net/RentADay?retryWrites=true&w=majority"
    }
}