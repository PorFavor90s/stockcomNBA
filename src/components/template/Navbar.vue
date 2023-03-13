<template>
    <Menubar :model="items">
      <template #end>
        <Button icon="pi pi-sign-out" @click="remove()"/>
      </template>
    </Menubar>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    components:{},
    items: [
      {
        label: "Home",
        icon: "pi pi-home",
        to : '/'
      },
      {
        label: "Product",
        icon: "pi pi-cart-plus",
        to: '/productmanage'
      },
      // {
      //   label: "Employee",
      //   icon: "pi pi-fw pi-users",
      //   to: '/employmanage'
      // },
      
    ], async remove(){
    await axios
      .get(`${process.env.VUE_APP_URL}/me`, {
        headers: {
          token: localStorage.removeItem("token")
          >>window.location.reload()
        },
      }).then((res)=>{
        console.log(res);
      })
      .catch((err) => {
        if(err.response.status===408){
            window.location.reload()
        }
      });
 }
})
} 
</script>