<template>
    <div class="col-6">
      <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtopt()"/>
    </div>
    <div class="col-6 lg:col-offset-5 text-cyan-400">
      <h2>ระบบเพิ่มประเภทของสินค้า</h2>
    </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" placeholder="กรุณาใส่ประเภทของสินค้า" v-tooltip="'ประเภทของสินค้าไม่ควรซ้ำกัน'"/><br/></div>
    <div class="col-6 lg:col-offset-5">
      <Button icon="pi pi-check-circle" label="ยืนยัน" @click="submitproducttype()"></Button>
    </div>
    <Toast />
  </template>
  <script>
  import axios from 'axios';
  
  export default {
      data:()=>({
          name:"", 
      }),
      methods:{
          backtopt(){
            this.$router.push('/producttype')
          },
          async submitproducttype(){
              await axios.post(`${process.env.VUE_APP_URL}/types`,
              { name : this.name,
              },{
                 headers:{'token': localStorage.getItem('token')}
              }).then((res)=>{
                  console.log(res)
                  this.level = res.data.data.level
                  this.$router.push('/producttype')
                  this.$toast.add({severity:'success', summary: 'เสร็จเรียบร้อย!', detail:'เพิ่มสินค้าประเภทใหม่เแล้ว', life: 3000});
              }).catch((err)=>{
                  console.log(err)
              })
        }
      }
  }
  </script>
  