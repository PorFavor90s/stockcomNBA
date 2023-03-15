<template>
    <!-- หน้านี้ยังใช้งานไม่ได้ เพราะไม่มี PUSH ไว้อัพเดตข้อมูลนะ -->
    <div class="col-6 lg:col-offset-5 text-cyan-400">
      <h2>ระบบแก้ไขข้อมูลพนักงาน</h2>
    </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="username" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="password" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="level" /><br/></div>
    <div class="col-6 lg:col-offset-5">
      <!-- placeholder="ใส่ชื่อ",placeholder="ใส่ชื่อผู้ใช้งาน",placeholder="ใส่รหัสผ่าน",placeholder="ใส่ตำแหน่งงาน" -->
      <Button icon="pi pi-check" label="ยืนยัน" @click="updateuser()"></Button>
    </div>
    <Toast />
  </template>
  <script>
  import axios from 'axios';
  
  export default {
      data:()=>({
        name:"",
        username:"",
        password:"",
        level:""
          // name:id.data.data.name,
          // username:id.data.data.username,
          // password:id.data.data.password,
          // level: id.data.data.level
      }),
      methods:{
        //   async submituser(){
        //       await axios.post(`${process.env.VUE_APP_URL}/employee`,
        //       {   name : this.name,
        //           username : this.username,
        //           password : this.password,
        //           level: this.level,
        //       },{
        //          headers:{'token': localStorage.getItem('token')}
        //       }).then((res)=>{
        //           console.log(res)
        //       }).catch((err)=>{
        //           console.log(err)
        //       })
        // }
      },
      async mounted(id) {
      await axios
      .get(`${process.env.VUE_APP_URL}/employee/${id}`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)

        // res => this.name = res.data.data,
        // res => this.username = res.data.data,
        // res => this.password = res.data.data,
        // res => this.level = res .data.data
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 408) {
  //         window.location.reload();}
  //     });
  // },
  })
  }}
  </script>
  