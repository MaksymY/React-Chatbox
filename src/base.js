import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCn8OPEtqpbhAspvKLAsAOU5f42VVekDWg",
    authDomain: "chatbox-7c2fd.firebaseapp.com",
    databaseURL: "https://chatbox-7c2fd.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base