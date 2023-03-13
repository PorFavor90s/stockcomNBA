<template>
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
      <h1>ระบบจัดการแบรนด์</h1>
    </div>
<div class="col-12"></div>
<div class="card">
            <Toolbar class="mb-4">
                <template #end>
                    <Button label="เพิ่มแบรนด์" icon="pi pi-verified" class="p-button-success mr-2" @click="createbrand()" />
                </template>
            </Toolbar>    
</div>
<div class="table">
        <DataTable :value="brands" responsiveLayout="scroll">
            <Column field="name" header="ชื่อแบรนด์"></Column>
            <Column field="createdAt" header="สร้างเมื่อ"></Column>
            <Column field="updatedAt" header="อัพเดตเมื่อ"></Column>
            <Column :exportable="false" style="min-width:8rem" header="ลบแบรนด์">
            <template #body="item">
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deletebrand(item.data._id)"/>
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
    document.title = "จัดการแบรนด์";},
    data:()=>({
        brands:[],
    }),
    methods:{
        createbrand(){
            this.$router.push('/createbr')
        },
        async deletebrand(id){ console.log(id)
        await axios
        .delete(`${process.env.VUE_APP_URL}/brands/${id}`,{
        headers: { 'token': localStorage.getItem('token') },})
        .then(()=>{
        const position = this.brands.findIndex((el)=>el._id===id)
        this.brands.splice(position,1)
        this.$toast.add({severity:'warn', summary: 'ดำเนินการเสร็จสิ้น', detail:'ลบเเบรนด์นี้แล้ว', life: 3000 });},
        )
        .catch((err)=>{
        if (err.response.status === 408) {
        window.location.reload();}
        });},
    },
    async mounted() {
      await axios
      .get(`${process.env.VUE_APP_URL}/brands`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)
        this.brands = res.data.data;
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
  },
}
</script>
