import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuSOe9OLyhlAlRefrtvTjcxzywabSYjZA",
  authDomain: "cursos-alfaweb-ed1b7.firebaseapp.com",
  projectId: "cursos-alfaweb-ed1b7",
  storageBucket: "cursos-alfaweb-ed1b7.appspot.com",
  messagingSenderId: "158991809607",
  appId: "1:158991809607:web:eb67b95c7132dc9248c562"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
