<template>
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
      <h1>ระบบจัดการประเภทของสินค้า</h1>
    </div>
<div class="col-12"></div>
<div class="card">
            <Toolbar class="mb-4">
                <template #end>
                    <Button label="เพิ่มประเภทของสินค้า" icon="pi pi-tag" class="p-button-success mr-2" @click="createproducttype()" />
                </template>
            </Toolbar>    
</div>
<div class="table">
        <DataTable :value="producttype" responsiveLayout="scroll">
            <Column field="name" header="ประเภทสินค้า"></Column>
            <Column field="createdAt" header="สร้างเมื่อ"></Column>
            <Column field="updatedAt" header="อัพเดตเมื่อ"></Column>
            <Column :exportable="false" style="min-width:8rem" header="ลบประเภทสินค้า">
            <template #body="item">
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteproducttype(item.data._id)"/>
            <!-- @click="deleteuser(item.data._id)" -->
            </template>
      </Column>
        </DataTable>
	</div>
</template>
<script>
import axios from "axios";

export default {
    created() {
    document.title = "จัดการประเภทของสินค้า";},
    data:()=>({
        producttype:[],
    }),
    methods:{
        createproducttype(){
            this.$router.push('/createproducttype')
        },
        async deleteproducttype(id){ console.log(id)
        await axios
        .delete(`${process.env.VUE_APP_URL}/types/${id}`,{
        headers: { 'token': localStorage.getItem('token') },})
        .then(()=>{
        const position = this.producttype.findIndex((el)=>el._id===id)
        this.producttype.splice(position,1)
        this.$toast.add({severity:'warn', summary: 'ดำเนินการเสร็จสิ้น', detail:'ลบประเภทสินค้านี้แล้ว', life: 3000 });},
        )
        .catch((err)=>{
        if (err.response.status === 408) {
        window.location.reload();}
        });},
    },
    async mounted() {
      await axios
      .get(`${process.env.VUE_APP_URL}/types`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)
        this.producttype = res.data.data;
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
  },
}
</script>
