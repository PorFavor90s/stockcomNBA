<template>
    <div class="col-6">
      <Button icon="pi pi-angle-double-left" class="p-button-rounded p-button-info" @click="backtopro()"/>
    </div>
    <div class="col-6 lg:col-offset-5 text-cyan-400">
      <h2>ระบบเพิ่มสินค้า</h2>
    </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="employee" disabled/><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="name" placeholder="กรุณาใส่ชื่อสินค้า" v-tooltip="'ชื่อสินค้าไม่ควรซ้ำกัน'"/><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="detail" placeholder="ใส่รายละเอียดสินค้าเพิ่มเติม"/><br/></div>
      <div class="col-6 lg:col-offset-5">
      <Dropdown v-model="selectbrand" :options="brands" optionLabel="name" optionValue="name" placeholder="กรุณาเลือกแบรนด์"></Dropdown>
      </div>
      <div class="col-6 lg:col-offset-5">
      <Dropdown v-model="selectvender" :options="vender" optionLabel="name" optionValue="_id" placeholder="กรุณาเลือกผู้ขาย"></Dropdown>
      </div>
      <div class="col-6 lg:col-offset-5">
      <Dropdown v-model="selectwarehouse" :options="warehouse" optionLabel="name" optionValue="_id" placeholder="กรุณาเลือกคลังสินค้า"></Dropdown>
      </div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="barcode" placeholder="กรุณาใส่บาร์โค้ด" v-tooltip="'ระบุเฉพาะตัวเลข'"/><br/></div>
      <div class="col-6 lg:col-offset-5"><InputText type="text" v-model="receiptNo" placeholder="กรุณาใส่เลขที่ใบเสร็จรับเงิน" v-tooltip="'ระบุเฉพาะตัวเลข'"/><br/></div>
      <div class="col-6 lg:col-offset-5">
      <Dropdown v-model="selecttype" :options="type" optionLabel="name"  optionValue="name" placeholder="กรุณาเลือกประเภทสินค้า"></Dropdown>
      </div>

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
            employee:"",
            employeeId:"",
            name:"",
            detail:"",
            selectbrand:null,
            brands:[],
            vender:[],
            selectvender:null,
            venderId:"",
            warehouse:[],
            selectwarehouse:null,
            warehouseId:"",
            barcode:"",
            receiptNo:"",
            type:[],
            amount:"",
            cost:"",
            selecttype:null,
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
              brands: this.selectbrand,
              venderId: this.selectvender,
              warehouseId: this.selectwarehouse,
              barcode: this.barcode,
              receiptNo: this.receiptNo,
              type: this.selecttype,
              amount: this.amount,
              cost:this.cost,
              };
            console.log(body);
              await axios.post(`${process.env.VUE_APP_URL}/products`,body
              ,{
                 headers:{'token': localStorage.getItem('token')}
              }).then((res)=>{
                  console.log(res)
                  this.$router.push('/adminproduct')
                  this.$toast.add({severity:'success', summary: 'เรียบร้อย!', detail:'เพิ่มสินค้าเแล้ว', life: 3000});
              }).catch((err)=>{
                  console.log(err)
              })
        },
        },
      async beforeMount() {
        // get user
        await axios
            .get(`${process.env.VUE_APP_URL}/employee`, {
            headers: { "token": localStorage.getItem("token") },
        })
            .then(() => {
            this.employee = localStorage.getItem("username");
            this.employeeId = localStorage.getItem("userid");
        })
            .catch((err) => {
            if (err.response.status === 408) {
                window.location.reload();
            }
        });

        // get brands
        await axios
                .get(`${process.env.VUE_APP_URL}/brands`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.brands = res.data.data,
                console.log(res)
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });
        
        //get types
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

        // get venders
        await axios.get(`${process.env.VUE_APP_URL}/venders`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.vender = res.data.data;
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });

        //get warehouses
        await axios.get(`${process.env.VUE_APP_URL}/warehouses`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.warehouse = res.data.data;
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });


        }

        }
  </script>
  