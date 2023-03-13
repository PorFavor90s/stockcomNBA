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
        // ด้านบนนี้เลือกได้นะว่าอยากจะเอา nav ทำดาหรือ nav แบบแอดมิน ส่วนตัวแนะ nav ทำดา มันจะได้ไปในทางเดียวกัน
      },
      {
        label: "Brand",
        icon: "pi pi-list",
        to: '/brand'
      },
      {
        label: "Vender",
        icon: "pi pi-users",
        to: '/vender'
      },
      {
        label: "Warehouse",
        icon: "pi pi-home",
        to: '/warehouse'
      },
      {
        label: "ProductType",
        icon: "pi pi-tags",
        to: '/producttype'
      },
      {
        label: "Product",
        icon: "pi pi-shopping-cart",
        to: '/adminproduct'
      },
      {
        label: "Receipt",
        icon: "pi pi-file-edit",
        to: '/receipt'
      },
      {
        label: "Employee",
        icon: "pi pi-user-edit",
        to: '/employmanage'
      },
      
    ], async remove(){
    await axios
      .get(`${process.env.VUE_APP_URL}/me`, {
        headers: {
          token: localStorage.removeItem("token"),
          userid: localStorage.removeItem("userid"),
          username: localStorage.removeItem("username")
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
