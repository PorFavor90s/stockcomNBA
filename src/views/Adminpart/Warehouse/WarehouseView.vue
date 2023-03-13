<template>
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
      <h1>ระบบจัดการคลังสินค้า</h1>
    </div>
<div class="col-12"></div>
<div class="card">
            <Toolbar class="mb-4">
                <template #end>
                    <Button label="เพิ่มคลังสินค้า" icon="pi pi-home" class="p-button-success mr-2" @click="createwarehouse()" />
                </template>
            </Toolbar>    
</div>
<div class="table">
        <DataTable :value="warehouses" responsiveLayout="scroll">
            <Column field="name" header="ชื่อคลังสินค้า"></Column>
            <Column field="address" header="ที่อยู่คลังสินค้า">
            </Column>
            <Column field="telephone" header="เบอร์โทรคลังสินค้า">
            <template #body="telephonee">
            <ul>
                <li v-for="(item,index) in telephonee.data.telephone" :key="index">
                <span>เบอร์โทร{{index+1}} :&nbsp;</span>
                <span>{{item.tel}}</span>
                </li>
            </ul>
            </template>
            </Column>

            <Column field="createdAt" header="สร้างเมื่อ"></Column>
            <Column field="updatedAt" header="อัพเดตเมื่อ"></Column>
            <Column :exportable="false" style="min-width:8rem" header="ลบคลังสินค้า">
            <template #body="item">
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deletewarehouse(item.data._id)"/>
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
    document.title = "จัดการคลังสินค้า";},
    data:()=>({
        warehouses:[],
    }),
    methods:{
        createwarehouse(){
            this.$router.push('/createwarehouse')
        },
    async deletewarehouse(id){ console.log(id)
        await axios
        .delete(`${process.env.VUE_APP_URL}/warehouses/${id}`,{
        headers: { 'token': localStorage.getItem('token') },})
        .then(()=>{
        const position = this.warehouses.findIndex((el)=>el._id===id)
        this.warehouses.splice(position,1)
        this.$toast.add({severity:'warn', summary: 'ดำเนินการเสร็จสิ้น', detail:'ลบเเบรนด์นี้แล้ว', life: 3000 });},
        )
        .catch((err)=>{
        if (err.response.status === 408) {
        window.location.reload();}
        });},
    },
    async mounted() {
      await axios
      .get(`${process.env.VUE_APP_URL}/warehouses`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)
        this.warehouses = res.data.data;
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
  },
}
</script>
