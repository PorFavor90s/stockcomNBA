<template>
    <div class="col-6">
      <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtove()"/>
    </div>
    <div class="col-6 lg:col-offset-5 text-cyan-400">
      <h2>ระบบเพิ่มผู้ขาย</h2>
    </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" placeholder="กรุณาใส่ชื่อผู้ขาย" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="address" placeholder="กรุณาใส่ที่อยู่ผู้ขาย" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="tel" placeholder="กรุณาใส่เบอร์โทรผู้ขาย" v-tooltip="'ระบุเฉพาะตัวเลข'"/><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="email" placeholder="กรุณาใส่อีเมลติดต่อผู้ขาย" /><br/></div>
    <div class="col-6 lg:col-offset-5">
      <Button icon="pi pi-check-circle" label="ยืนยัน" @click="submitvender()"></Button>
    </div>
    <Toast />
  </template>
  <script>
  import axios from 'axios';
  
  export default {
      data:()=>({
          name:"", 
          address:"", 
          tel:"", 
          email:"", 
      }),
      methods:{
          backtove(){
            this.$router.push('/vender')
          },
          async submitvender(){
              await axios.post(`${process.env.VUE_APP_URL}/venders`,
              { name : this.name,
                address : this.address,
                tel : this.tel,
                email : this.email,
              },{
                 headers:{'token': localStorage.getItem('token')}
              }).then((res)=>{
                  console.log(res)
                  this.level = res.data.data.level
                  this.$router.push('/vender')
                  this.$toast.add({severity:'success', summary: 'เสร็จเรียบร้อย!', detail:'เพิ่มผู้ขายเแล้ว', life: 3000});
              }).catch((err)=>{
                  console.log(err)
              })
        }
      }
  }
  </script>
  