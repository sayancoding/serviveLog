import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAuoZpm2UdBcySaMQyRbTOm6LVSnkjuDfk",
    authDomain: "servicelog-b3d07.firebaseapp.com",
    projectId: "servicelog-b3d07",
    storageBucket: "servicelog-b3d07.appspot.com",
    messagingSenderId: "1022113525562",
    appId: "1:1022113525562:web:3604e15f7baf1bd68eaa03"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth,extraData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { uid, email,photoURL } = userAuth.providerData[0];
        const createTime = new Date();
        try{
            firestore.doc(`users/${userAuth.uid}`).set({
                uid:uid,
                email:email,
                photoURL:photoURL,
                createdAt:createTime
            })
            console.log({
                uid: uid,
                email: email,
                photoURL: photoURL,
                createdAt: createTime
            })
            console.log(userAuth.uid)
            localStorage.removeItem("serviceUid")
            localStorage.setItem("serviceUid",userAuth.uid)
        }catch(err){
            console.log(err)
        }
    }else{
        console.log(snapShot.id)
        localStorage.removeItem("serviceUid")
        localStorage.setItem("serviceUid", userAuth.uid)
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signWithGoogle = async () => {
    const credential = await auth.signInWithPopup(provider);
    await createUserProfileDocument(credential.user)
    window.location.reload()
}
export default firebase;