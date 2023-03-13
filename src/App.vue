<template>
  <div v-if="session">
      <div v-if="level === 'admin'">
        <Adminnav/>
        <router-view/>
      </div>
      <div v-else>
        <Navbar/>
        <router-view/>
      </div>
  </div>
  <div v-else>
      <LoginView />
  </div>
  <Toast />
</template>
<script>
import axios from "axios";
import LoginView from "./views/Employpart/LoginView.vue";
import Navbar from '@/components/template/Navbar.vue'
import Adminnav from '@/components/template/Adminnav.vue'


export default {
  data() {
    return {
      session: false,
      level : '',
    };
  },
  components: {
    LoginView, Navbar,Adminnav,
  },
  methods:{
  },
  async mounted() {
    if (localStorage.getItem("token")) {
      await axios.get(`${process.env.VUE_APP_URL}/me`, {
        headers: {
          'token' : localStorage.getItem('token')
        }
      }).then((res)=>{
        this.level = res.data.data.level
        this.session = true;
      }).catch(()=>{
        localStorage.clear();
        window.location.assign('/login')
      })
    }
  },
};
</script>

<!-- <style scoped>
body {
  background-image: url("./components/pics/sunrise-gad5f38b10_1920.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style> -->