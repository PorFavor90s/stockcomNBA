<template>
    <div class="col-6">
      <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtobr()"/>
    </div>
    <div class="col-6 lg:col-offset-5 text-cyan-400">
      <h2>ระบบสร้างแบรนด์สินค้า</h2>
    </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" placeholder="กรุณาใส่ชื่อแบรนด์" v-tooltip="'ชื่อแบรนด์ไม่ควรซ้ำกัน'"/><br/></div>
    <div class="col-6 lg:col-offset-5">
      <Button icon="pi pi-check-circle" label="ยืนยัน" @click="submitbrand()"></Button>
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
          backtobr(){
            this.$router.push('/brand')
          },
          async submitbrand(){
              await axios.post(`${process.env.VUE_APP_URL}/brands`,
              {   name : this.name,
              },{
                 headers:{'token': localStorage.getItem('token')}
              }).then((res)=>{
                  console.log(res)
                  this.level = res.data.data.level
                  this.$router.push('/brand')
                  this.$toast.add({severity:'success', summary: 'เสร็จเรียบร้อย!', detail:'เพิ่มพนักงานเแล้ว', life: 3000});
              }).catch((err)=>{
                  console.log(err)
              })
        }
      }
  }
  </script>
  