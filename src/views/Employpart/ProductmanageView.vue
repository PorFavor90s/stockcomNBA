<template>
  <div class="grid">
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
        <h1>ระบบจัดการสต๊อกสินค้า</h1>
    </div>
    <div class="col-12 text-pink-200">
    <h3>กำลังทำการพัฒนา...</h3>
  </div>
  <div>
    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" @click="lettest()"/>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    created(){document.title = 'จัดการสต๊อกสินค้า'},
    methods:{
      lettest(){
        this.$router.push('/test')
      }

    },
    async mounted() {
      await axios
      .get(`${process.env.VUE_APP_URL}/product`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
  },
};
</script>
<!-- <style>
    .body{
    background: none;
}
</style> -->
