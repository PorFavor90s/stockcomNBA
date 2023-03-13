<template>
    <div class="col-6">
      <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtopro()"/>
    </div>
    <div class="col-6 lg:col-offset-5 text-cyan-400">
      <h2>ระบบเพิ่มสินค้า</h2>
    </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="employeeId" placeholder="กรุณาใส่ID(พนักงาน)" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" placeholder="กรุณาใส่ชื่อสินค้า" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="detail" placeholder="ใส่รายละเอียดเพิ่มเติม"/><br/></div>

      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="brands" placeholder="กรุณาใส่แบรนด์"/><br/></div>
      <!-- <div class="col-6 lg:col-offset-5">
      <Dropdown v-model="selectbrand" :options="brands" optionLabel="name" placeholder="กรุณาเลือกแบรนด์"  @click="callbrand"></Dropdown>
      </div> -->

      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="venderId" placeholder="กรุณาใส่ID(ผู้ขาย)" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="warehouseId" placeholder="กรุณาใส่ID(คลังสินค้า)" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="barcode" placeholder="กรุณาใส่บาร์โค้ด" v-tooltip="'ระบุเฉพาะตัวเลข'"/><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="receiptNo" placeholder="กรุณาใส่เลขที่ใบเสร็จรับเงิน" /><br/></div>
      
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="type" placeholder="กรุณาใส่ประเภทสินค้า" /><br/></div>
      <!-- <div class="col-6 lg:col-offset-5">
      <Dropdown v-model="selecttype" :options="type" optionLabel="name" placeholder="กรุณาเลือกประเภทสินค้า"  @click="calltype"></Dropdown>
      </div> -->

      <div class="col-6 lg:col-offset-5"><InputText type="number" v-model="amount" placeholder="ใส่จำนวนสินค้า" /><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="cost" placeholder="ใส่ค่าใช้จ่าย" v-tooltip="'ระบุเฉพาะตัวเลข'"/><br/></div>
    <div class="col-6 lg:col-offset-5">
      <Button icon="pi pi-check-circle" label="ยืนยัน" @click="submitproduct()"></Button>
    </div>
    <Toast />
  </template>
  <script>
  import axios from 'axios';
  
  export default {
      data:()=>({
            employeeId:"",
            name:"",
            detail:"",
            // selectbrand:null,
            brands:"",
            venderId:"",
            warehouseId:"",
            barcode:"",
            receiptNo:"",
            type:"",
            amount:"",
            cost:"",
            // selecttype:null,
      }),
      methods:{
          backtopro(){
            this.$router.push('/adminproduct')
          },

          async submitproduct(){
            const body = {
              employeeId: this.employeeId,
              name: this.name,
              detail: this.detail,
              brands: this.brands,
              venderId: this.venderId,
              warehouseId: this.warehouseId,
              barcode: this.barcode,
              receiptNo: this.receiptNo,
              type: this.type,
              amount: this.amount,
              cost:this.cost,
              };
            console.log(body);

              await axios.post(`${process.env.VUE_APP_URL}/products`,
              { employeeId:this.employeeId,
                name:this.name,
                detail:this.detail,
                brands:this.brands,
                venderId:this.venderId,
                warehouseId:this.warehouseId,
                barcode:this.barcode,
                receiptNo:this.receiptNo,
                type:this.type,
                amount:this.amount,
                cost:this.cost,
              },{
                 headers:{'token': localStorage.getItem('token')}
              }).then((res)=>{
                  console.log(res)
                  this.$router.push('/adminproduct')
                  this.$toast.add({severity:'success', summary: 'เรียบร้อย!', detail:'เพิ่มสินค้าเแล้ว', life: 3000});
              }).catch((err)=>{
                  console.log(err)
              })
        },

        async callbrand(){
            await axios.get(`${process.env.VUE_APP_URL}/brands`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.brands = res.data.data;
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });
        },

        async calltype(){
          await axios.get(`${process.env.VUE_APP_URL}/types`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.type = res.data.data;
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });
        },
        },
      }
  
  </script>
  