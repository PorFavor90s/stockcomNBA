<template>
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
      <h1>ระบบจัดการผู้ขาย</h1>
    </div>
    <div class="col-12"></div>
<div class="card">
            <Toolbar class="mb-4">
                <template #end>
                    <Button label="เพิ่มผู้ขาย" icon="pi pi-user-plus" class="p-button-success mr-2" @click="createvender()" />
                </template>
            </Toolbar>
  <!-- ไว้show Dialog -->
  <div class="createdialog col-12">
          <Dialog header="แก้ไขข้อมูลผู้ขาย" v-model:visible="display">
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="name" type="text" v-model="showedit.name" />
            <label for="name">ชื่อ</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="address" type="text" v-model="showedit.address" />
            <label for="address">ที่อยู่</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="tel" type="text" v-model="showedit.tel" />
            <label for="tel">เบอร์โทร</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="email" type="text" v-model="showedit.email" />
            <label for="email">อีเมล</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <Button icon="pi pi-save" label="ยืนยัน" class="p-button-rounded p-button-help lg:col-offset-5" @click="updatevender(keepid)"/>
          </Dialog>
  </div>  
                   
</div>
<div class="table">
        <DataTable :value="venders" responsiveLayout="scroll">
            <Column field="name" header="ชื่อผู้ขาย"></Column>
            <Column field="address" header="ที่อยู่"></Column>
            <Column field="tel" header="เบอร์โทร"></Column>
            <Column field="email" header="อีเมล"></Column>
            <Column field="createdAt" header="สร้างเมื่อ"></Column>
            <Column field="updatedAt" header="อัพเดตเมื่อ"></Column>
            <Column :exportable="false" style="min-width:8rem" header="แก้ไข/ลบข้อมูลผู้ขาย">
            <template #body="item">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"  @click="editvender(item.data._id)"/>

            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deletevender(item.data._id)"/>
            </template>
      </Column>
        </DataTable>
	</div>
</template>
<script>
import axios from 'axios';

export default {
    created() {
    document.title = "จัดการผู้ขาย";},
    data:()=>({
      keepid:"",
      display:false,
      venders:[],
      showedit:[],
      contact:{
              name:'',
              address:'',
              tel:'',
              email:'',}
    }),
    methods:{
    createvender(){
            this.$router.push('/createven')
        },
    async deletevender(id){ console.log(id)
        await axios
        .delete(`${process.env.VUE_APP_URL}/venders/${id}`,{
        headers: { 'token': localStorage.getItem('token') },})
        .then(()=>{
        const position = this.venders.findIndex((el)=>el._id===id)
        this.venders.splice(position,1)
        this.$toast.add({severity:'warn', summary: 'ดำเนินการเสร็จสิ้น', detail:'ลบผู้ขายคนนี้แล้ว', life: 3000 });},
        )
        .catch((err)=>{
        if (err.response.status === 408) {
        window.location.reload();}
        });},

    async updatevender(id){
      console.log(id)
          await axios.patch(`${process.env.VUE_APP_URL}/venders/${id}`,
              { name:this.showedit.name,
                address:this.showedit.address,
                tel:this.showedit.tel,
                email:this.showedit.email,
              },
             {headers:{'token': localStorage.getItem('token')}})
          .then((res)=>{
            window.location.reload();
            console.log(res)
            this.$toast.add({severity:'success', summary: 'เรียบร้อย!', detail:'อัพเดตรายละเอียดพนักงานเแล้ว', life: 3000});
            })
          .catch((err)=>{
                  console.log(err)
                  window.location.reload();
          })},
        
    async editvender(id) {
        await axios
        .get(`${process.env.VUE_APP_URL}/venders/${id}`, {
        headers: { 'token': localStorage.getItem('token') },
        })
        .then((res) => {
        this.keepid=id,
        this.showedit=res.data.data,
        this.display=true,
        console.log(res)
        // this.$router.push('/editu')
        })
        .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
        })
        },
        
        },
    async mounted() {
      await axios
      .get(`${process.env.VUE_APP_URL}/venders`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)
        this.venders = res.data.data;
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
  },
}
</script>
