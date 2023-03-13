<template>
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
      <h1>ระบบจัดการสินค้า</h1>
    </div>
    <div class="col-12"></div>
<div class="card">
            <Toolbar class="mb-4">
                <template #end>
                    <Button label="เพิ่มสินค้า" icon="pi pi-cart-plus" class="p-button-success mr-2" @click="createproduct()" />
                </template>
            </Toolbar>

  <!-- ไว้show Dialog -->
  <div class="createdialog col-12">
          <Dialog header="แก้ไขข้อมูลสินค้า" v-model:visible="display">
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="name" type="text" v-model="showedit.name" />
            <label for="name">ชื่อสินค้า</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="detail" type="text" v-model="showedit.detail" />
            <label for="detail">รายละเอียด</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="brands" type="text" v-model="showedit.brands" />
            <label for="brands">เเบรนด์</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="barcode" type="text" v-model="showedit.barcode" />
            <label for="barcode">บาร์โค้ด</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="amount" type="text" v-model="showedit.amount" />
            <label for="amount">จำนวน</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="type" type="text" v-model="showedit.type" />
            <label for="type">ประเภท</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="cost" type="text" v-model="showedit.cost" />
            <label for="cost">ค่าใช้จ่าย</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="price" type="text" v-model="showedit.price" />
            <label for="price">ราคา</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <Button icon="pi pi-save" label="ยืนยัน" class="p-button-rounded p-button-help lg:col-offset-5" @click="updateproduct(keepid)"/>
          </Dialog>
  </div>  
  
</div>
<div class="table">
        <!-- <DataTable></DataTable> -->
        <DataTable :value="products" responsiveLayout="scroll">
            <Column field="barcode" header="บาร์โค้ด"></Column>
            <Column field="name" header="ชื่อสินค้า"></Column>
            <Column field="brands" header="แบรนด์"></Column>
            <Column header="ชื่อผู้ขาย">
            <template #body="item">
              {{ getVenderName(item.data.venderId) }}
            </template>
            </Column>
            <Column field="warehouseId" header="ชื่อคลังสินค้า">
            <template #body ="item">
                {{ getwarehouseName(item.data.warehouseId) }}
            </template>
            </Column>
            <Column field="amount" header="จำนวน"></Column>
            <Column field="type" header="ประเภท"></Column>
            <Column field="detail" header="รายละเอียดสินค้า"></Column>
            <Column field="cost" header="ค่าใช้จ่าย"></Column>
            <Column field="price" header="ราคา"></Column>
            <Column field="createdAt" header="สร้างเมื่อ"></Column>
            <Column field="updatedAt" header="อัพเดตเมื่อ"></Column>
            <Column :exportable="false" style="min-width:8rem" header="แก้ไข/ลบสินค้า"> -->
            <template #body="item">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"  @click="editproduct(item.data._id)"/>

            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteproduct(item.data._id)"/>
            </template>
            </Column>
        </DataTable>
	</div>
</template>
<script>
import axios from 'axios';

export default {
    created() {
    document.title = "จัดการสินค้า";
    // ตรงนี้สามารถใส่ Async ไปget ข้อมูลนั้นๆมาได้ไหมห
  },
    data:()=>({
        display:false,
        keepid:"",
        showedit:[],
        products:[],
        warehouse:[]
    }),
    methods:{
      getVenderName(id){
       const venderName= this.venders.find((el)=>el._id == id);
       return venderName.name;
      },
      getwarehouseName(id){
       const warehouseName = this.warehouse.find((el)=>el._id == id);
       return warehouseName.name;
      },
      
    createproduct(){
            this.$router.push('/createadminpro')
        },
    async deleteproduct(id){
        await axios
        .delete(`${process.env.VUE_APP_URL}/products/${id}`,{
        headers: { 'token': localStorage.getItem('token') },})
        .then(()=>{
        const position = this.products.findIndex((el)=>el._id===id)
        this.products.splice(position,1)
        this.$toast.add({severity:'warn', summary: 'ดำเนินการเสร็จสิ้น', detail:'ลบสินค้านี้แล้ว', life: 3000 });},
        )
        .catch((err)=>{
        if (err.response.status === 408) {
        window.location.reload();}
        });},

    async updateproduct(id){
          await axios.patch(`${process.env.VUE_APP_URL}/products/${id}/update`,
              { name:this.showedit.name,
                detail:this.showedit.detail,
                brands:this.showedit.brands,
                venderId:this.showedit.venderId,
                barcode:this.showedit.barcode,
                amount:this.showedit.amount,
                type:this.showedit.type,
                cost:this.showedit.cost,
                price:this.showedit.price,
              },
             {headers:{'token': localStorage.getItem('token')}})
          .then((res)=>{
            window.location.reload();
            console.log(res)
            this.$toast.add({severity:'success', summary: 'เรียบร้อย!', detail:'อัพเดตรายละเอียดสินค้าแล้ว', life: 3000});
            })
          .catch((err)=>{
                  console.log(err)
                  window.location.reload();})},
          
        
    async editproduct(id) {
        await axios
        .get(`${process.env.VUE_APP_URL}/products/${id}`, {
        headers: { 'token': localStorage.getItem('token') },
        })
        .then((res) => {
        this.keepid=id,
        this.showedit=res.data.data,
        this.display=true,
        console.log(res)
        })
        .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
        })
        },
        
        },
    async mounted() {
      //get venders
      await axios.get(`${process.env.VUE_APP_URL}/venders`,{
        headers: {'token': localStorage.getItem('token') }
      }).then((result)=>{
        this.venders = result.data.data;
      });
      //get warehouse
      await axios.get(`${process.env.VUE_APP_URL}/warehouses`,{
        headers: {'token': localStorage.getItem('token') }
      }).then((result)=>{
        this.warehouse = result.data.data;
      });

      //get products
      await axios.get(`${process.env.VUE_APP_URL}/products/all`,{
        headers: {'token': localStorage.getItem('token') }
      }).then((result)=>{
        this.products = result.data.data;
      })
  },
}
</script>
