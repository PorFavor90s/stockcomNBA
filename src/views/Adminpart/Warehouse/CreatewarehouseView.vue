<template>
  <div class="col-6">
    <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtowar()"/>
  </div>
  <div class="col-6 lg:col-offset-5 text-cyan-400">
    <h2>ระบบสร้างคลังสินค้า</h2>
  </div>
  <div class="col-6 lg:col-offset-5">
    <InputText type="text" v-model="name" placeholder="กรุณาใส่ชื่อคลังสินค้า" v-tooltip="'ชื่อคลังสินค้าไม่ควรซ้ำกัน'"/><br />
  </div>
  <div class="col-6 lg:col-offset-5">
    <InputText type="text" v-model="address" placeholder="กรุณาใส่ที่อยู่คลังสินค้า"/>
  </div>

  <span>
  <div class="col-6 lg:col-offset-5">
    <InputText type="text" v-model="telephone" placeholder="กรุณาใส่เบอร์โทรคลังสินค้า" v-tooltip="'ถ้าต้องการเพิ่มเบอร์โทรให้กดปุ่มทางด้านขวา'" @change="this.data=[{tel:telephone}]"/>&nbsp; 
    <Button icon="pi pi-angle-down" class="p-button-rounded p-button-help" @click="showanother()"></Button>
  </div>
  </span>
  <div class="col-6 lg:col-offset-5" >
    <InputText type="text" v-model="telephone2" placeholder="เบอร์โทรเพิ่มเติม" v-tooltip="'ถ้าต้องการระบุแค่เบอร์โทรเดียวกดปุ่มด้านบนขวา'" v-show="hidefield"/>
  </div>

  <div class="col-6 lg:col-offset-5">
    <Button icon="pi pi-check-circle" label="ยืนยัน" @click="submitwarehouse()"></Button>
  </div>
  <Toast />
</template>
  <script>
import axios from "axios";

export default {
  data: () => ({
    name: "",
    address: "",
    telephone:[],
    telephone2:[],
    createtel:[],
    data:[],
    hidefield:false,
  }),

  methods: {   
    backtowar() {
      this.$router.push("/warehouse");
    },

    showanother(){this.hidefield=!this.hidefield},
    async submitwarehouse() {
      console.log(this.data);
      if( !this.hidefield){
        this.data=[{tel:this.telephone}]
      }
      else{
        this.data=[{tel:this.telephone},{tel:this.telephone2}]
      }
      const body = {
        name: this.name,
        address: this.address,
        telephone: this.data,
      };
      
    await axios
        .post(`${process.env.VUE_APP_URL}/warehouses`,
          body,{ headers: { token: localStorage.getItem("token") },})
        .then((res) => {
          console.log(res);
          this.$router.push("/warehouse");
          this.$toast.add({
            severity: "success",
            summary: "เสร็จเรียบร้อย!",
            detail: "เพิ่มคลังสินค้าเแล้ว",
            life: 3000,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
  