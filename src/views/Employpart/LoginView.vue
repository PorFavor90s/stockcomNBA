<template>
  <div class="grid">
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
  </div>
  <div class="grid">
    <div class="col-12 lg:col-2 lg:col-offset-5">
      <Panel header="NBA Stock ระบบจัดการสต๊อกสินค้า">
        <div class="grid">
          <div class="col-12">
            <p class="text-lg"><b>ชื่อผู้ใช้งาน :</b></p>
            <InputText
              v-model.trim ="username"
              placeholder="กรุณาใส่ชื่อผู้ใช้งาน"
              v-tooltip="'กรุณากรอกฟิลด์นี้'"
              class="w-full"
              @keyup.enter="checklogin()"
            />
          </div>
          <div class="col-12">
            <p class="text-lg"><b>รหัสผ่าน :</b></p>
            <InputText
              v-model ="password"
              type="password"
              placeholder="กรุณาใส่รหัสผ่าน"
              v-tooltip="'กรุณากรอกฟิลด์นี้'"
              class="w-full"
              @keyup.enter="checklogin()"
            />
          </div>
          <div class="col-12">
            <Button
              :loading="loading"
              label="Login"
              class="p-button-raised shadow-6 w-full"
              @click="checklogin()"
            />
          </div>
        </div>
      </Panel>
      </div>
    </div>
  <div class="grid">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components :{ 
  },
  data:()=>({
      username: "",
      password: "",
      loading:false,
  }),
  methods: {
      async checklogin(){
        if(this.username==="" || this.password===""){
        this.$toast.add({severity:'warn',summary:'แจ้งเตือน',
      detail:'กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านให้ถูกต้อง',life:3000});
      return false;
      }
      this.loading =true;
      await axios.post(`${process.env.VUE_APP_URL}/login`,
      { username : this.username,
        password : this.password
      }).then((res)=>{
        console.log(res);
        this.level=res.data.data.level
        console.log(res.data.data.level)
        this.loading =false;
        localStorage.setItem('token',res.data.data.token);
        localStorage.setItem('userid',res.data.data._id);
        localStorage.setItem('username',res.data.data.name);
        window.location.assign('/')
      }).catch((err)=>{
        console.log(err);
        this.loading = false;
        if(err.response.status === 401){
          this.$toast.add({severity:'error',summary:'ไม่สำเร็จ',
          detail:'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',life:3000}); 
        }else{
          this.$toast.add({severity:'error',summary:'ผิดพลาด',
          detail:err.response.data.message,life:3000 
        });
        }
        })
      }
    },
};
</script>

<style>
body {
  background-image: url("@/components/pics/sunrise-gad5f38b10_1920.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
