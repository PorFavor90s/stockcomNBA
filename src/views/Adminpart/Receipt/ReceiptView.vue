<template>
<div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
<h1>ระบบจัดการใบรับสินค้า</h1>
</div>
<div>
<div class="col-12"></div>
<div class="col-12"></div>

</div>
<div class="col-12 lg:col-6 lg:col-offset-5">
    <span><b>ชื่อพนักงาน: </b><InputText type="text" v-model="employee" disabled /></span>
  </div>
<div class="col-12"></div>
<div class="col-12 lg:col-6 lg:col-offset-5">
  <span><b>ผู้ขาย: </b></span>
      <Dropdown v-model="selectvender" :options="venders" optionLabel="name" optionValue="_id" :filter="true" placeholder="กรุณาเลือกผู้ขาย" ></Dropdown>
</div>
<div class="col-12"></div>
<div class="col-12 lg:col-6 lg:col-offset-5">
  <span><b>คลังสินค้า: </b></span>
      <Dropdown v-model="selectwarehouse" :options="warehouses" optionLabel="name" optionValue="_id" :filter="true" placeholder="กรุณาเลือกคลังสินค้า" ></Dropdown>
</div>
<div class="col-12"></div>
<div class="col-12 lg:col-6 lg:col-offset-5">
  <span><b>เลขที่ใบเสร็จรับเงิน: </b></span>
            <InputText id="receiptnumber" type="text" v-model="receiptNo" placeholder="กรุณาใส่เลขที่ใบเสร็จ" v-tooltip="'ระบุเฉพาะตัวเลข'"/>
</div>
<div class="col-12"></div>
<div class="col-12 lg:col-6 lg:col-offset-4">
<b>เพิ่มรายการสินค้า</b>
<br/>
<div class="col-12"></div>
<span>
      <Dropdown v-model="selectproduct" :options="products" optionLabel="name" :filter="true" placeholder="กรุณาเลือกชื่อสินค้า"></Dropdown>
      &nbsp;
      <InputText id="receiptnumber" type="number" v-model="ampro" placeholder="จำนวนสินค้าที่ต้องการ"/>
      &nbsp;
      <Button icon="pi pi-caret-down" @click="addproduct" v-tooltip.top="'กดเพื่อเพิ่มสินค้า'"></Button>&nbsp;
      <Button class="p-button-rounded p-button-danger" icon="pi pi-trash" @click="deletepro" v-tooltip.bottom="'ปุ่มนี้จะลบสินค้าล่างสุดเสมอ'"></Button>
      <!-- &nbsp; -->
      <!-- <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deletepro"/> -->
</span>
<br/><br/>

<div class="grid">
  &nbsp;
        <DataTable :value="product" responsiveLayout="scroll" v-show="hidetable">
            <Column field="productId" header="ชื่อสินค้า">
            <template #body="item">
                {{getproductName(item.data.productId)}}
            </template>
            </Column>
            <Column field="amount" header="จำนวนสินค้า"></Column>
            <!-- <Column header="ลบสินค้า">
            <template #body><Button class="p-button-rounded p-button-danger" icon="pi pi-trash"  @click="deletepro"></Button></template>
            </Column> -->
        </DataTable>
        <!-- <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deletepro"/> -->
    </div>
</div>

<div class="col-12"></div>
<div class="col-12"></div>
<div class="col-12"></div>
<div class="col-12"></div>

<div class="col-6 lg:col-6 lg:col-offset-5">
<span>
    <Button class="p-button-raised p-button-danger" label="ยกเลิก" icon="pi pi-times" @click="cancelreceipt()"></Button>&nbsp;
    <Button class="p-button-raised p-button-success" label="เรียบร้อย" icon="pi pi-check" @click="submitreceipt()"></Button>
</span>
</div>
</template>

<script>
import axios from 'axios';


export default {
    created() {
        document.title = "จัดการใบรับสินค้า";
    },
    data() {
        return {
            employee: "",
            employeeId:"",
            selectvender: null,
            selectwarehouse: null,
            selectproduct: null,
            venders: [],
            warehouses: [],
            products: [],
            product:[],
            receiptNo: "",
            ampro: "",
            hidetable:false,

        };
    },

    methods: {
        addproduct() {
            this.hidetable=true
            let prodata = this.product;
            prodata.push({
                productId: this.selectproduct._id,
                amount: this.ampro,
            });
            this.product = prodata;
            console.log('prodata',prodata);
        },
        deletepro() {
            let prodata = this.product;
            prodata.pop({
                productId: this.selectproduct._id,
                amount: this.ampro,
            });
            this.product = prodata;
            
        },

        cancelreceipt(){
            window.location.reload();
        },

        async allproduct() {
            await axios
                .get(`${process.env.VUE_APP_URL}/products/all`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.products = res.data.data;
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });
        },

        getproductName(id){
            const product = this.products.find((el)=>el._id==id)
            console.log(product) 
            return product.name
        },
        
        async submitreceipt(){

            const bodydata = {
            "employeeId" :this.employeeId,
            "venderId":this.selectvender,
            "warehouseId":this.selectwarehouse,
            "receiptNo":this.receiptNo,
            "product": this.product,
} ;
console.log(bodydata);

            await axios.post(`${process.env.VUE_APP_URL}/receipts`,
              bodydata
              ,{
                 headers:{'token': localStorage.getItem('token')}
              })
              .then((res)=>{
                  console.log(res);
                  this.$toast.add({severity:'success', summary: 'เรียบร้อย!', detail:'เสร็จสิ้นกระบวนการสร้างใบเสร็จแล้ว', life: 3000});
                  this.$router.push('/receipt/'+res.data.data._id)
              }).catch((err)=>{
                  console.log(err)
              })
          
        },
       
    },
    async beforeMount() {
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

        //get vender
            await axios
                .get(`${process.env.VUE_APP_URL}/venders`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.venders = res.data.data,
                console.log(res)
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });

            //get warehouse
            await axios
                .get(`${process.env.VUE_APP_URL}/warehouses`, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.warehouses = res.data.data;
            })
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });

            this.allproduct();
        },
}
</script>
