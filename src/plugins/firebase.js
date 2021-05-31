import Vue from 'vue'
import firebase from 'firebase/app'

import 'firebase/firebase-database'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
