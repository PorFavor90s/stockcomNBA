<template>
  <div class="col-6">
    <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtoem()"/>
  </div>
  <div class="col-6 lg:col-offset-5 text-cyan-400">
    <h2>ระบบเพิ่มพนักงาน</h2>
  </div>
    <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" placeholder="กรุณาใส่ชื่อของท่าน"/><br/></div>
    <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="username" placeholder="ชื่อผู้ใช้งาน" v-tooltip="'ควรตั้งให้ไม่ซ้ำกับชื่อผู้ใช้งานอื่น และจะถูกใช้เป็นชื่อในการล็อคอิน'"/><br/></div>
    <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="password" placeholder="รหัสผ่าน" v-tooltip="'ควรตั้งรหัสผ่าน 8-12 ตัวอักษรขึ้นไป ประกอบด้วยตัวเลขและตัวอักษร'"/><br/></div>
  
    <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="level" placeholder="ตำแหน่งงาน" v-tooltip="'ตำแหน่งงานสามารถระบุได้ 2 ตำแหน่งคือ admin และ employee เท่านั้น'"/><br/></div>
  <div class="col-6 lg:col-offset-5">
    <Button icon="pi pi-check-square" label="ยืนยัน" @click="submituser()"></Button>
  </div>
  <Toast />
</template>
<script>
import axios from 'axios';


export default {
    data:()=>({
        name:"",   
        username: "",
        password: "",
        level: "",
    }),
    methods:{
        backtoem(){
          this.$router.push('/employmanage')
        },
        async submituser(){
            await axios.post(`${process.env.VUE_APP_URL}/employee`,
            {   name : this.name,
                username : this.username,
                password : this.password,
                level: this.level,
            },{
               headers:{'token': localStorage.getItem('token')}
            }).then((res)=>{
                console.log(res)
                this.level = res.data.data.level
                this.$router.push('/employmanage')
                this.$toast.add({severity:'success', summary: 'เสร็จเรียบร้อย!', detail:'เพิ่มพนักงานเแล้ว', life: 3000});
            }).catch((err)=>{
                console.log(err)
            })
      }
    }
}
</script>
