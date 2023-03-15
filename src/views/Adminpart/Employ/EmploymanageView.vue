<template>
  <div class="grid">
    <div class="col-12 lg:col-4 lg:col-offset-5 text-cyan-400">
      <h1>ระบบจัดการพนักงาน</h1>
    </div>
  </div>

  <!-- ไว้ทำ Dialog -->
  <div class="createdialog col-12">
          <Dialog header="แก้ไขข้อมูลผู้ใช้" v-model:visible="display">
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="name" type="text" v-model="showedit.name" />
            <label for="name">ชื่อ</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="username" type="text" v-model="showedit.username" />
            <label for="username">ชื่อผู้ใช้งาน</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <span class="p-float-label">
            <InputText id="level" type="text" v-model="showedit.level" />
            <label for="level">ตำแหน่ง</label>
            </span>
            <div class="col-12"></div>
            <div class="col-12"></div>
            <Button icon="pi pi-save" label="ยืนยัน" class="p-button-rounded p-button-help lg:col-offset-6" @click="updateuser(id)"/>
          </Dialog>
  </div>
  <!-- ส่วนทดลองต่างๆ -->
  <div>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog group="templating">
                <template #message="slotProps">
                    <div class="flex p-4">
                        <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                        <p class="pl-2">{{slotProps.message.message}}</p>
                    </div>
                  </template>
        </ConfirmDialog>
  </div>

  <!-- ไว้เพิ่มพนักงาน -->
    <div class="card">
            <Toolbar class="mb-4">
                <template #end>
                    <Button label="เพิ่มพนักงาน" icon="pi pi-user-plus" class="p-button-success mr-2" @click="createuser()" />
                </template>
            </Toolbar>    
    </div>

  <div class="col-12">
    <DataTable :value="employee" responsiveLayout="scroll">
      <Column field="name" header="ชื่อ"></Column>
      <Column field="username" header="ชื่อผู้ใช้งาน"></Column> 
      <Column field="level" header="ตำแหน่ง"></Column>
      <!-- เอาไว้ทำปุ่ม edit,delete -->
      <Column :exportable="false" style="min-width:8rem" header="แก้ไข/ลบข้อมูล">
        <template #body="item">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"  @click="edituser(item.data._id)"/>
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteuser(item.data._id)"/>
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
    document.title = "จัดการพนักงาน";
  },
  data: () => ({
    display:false,
    showedit:[],
    name:"",
    username:"",
    password:"",
    level:"",
    employee: [],

  }),
  methods:{
    createuser(){
      this.$router.push('/createu')
    },
    // สร้าง method นี้ไว้รอฟังคชั่น PUSH ไปอัพเดตข้อมูล
    // edituser(){
    //   this.$router.push('/editu')
    // },
    
    // ทดลองสร้าง method ยืนยันการลบข้อมูล
    // confirmation() {
    //     this.$confirm.require({
    //     message: 'คุณต้องการลบผู้ใช้นี้หรือไม่?',
    //     header: 'ยืนยันการลบข้อมูล',
    //     icon: 'pi pi-trash',
    //     acceptClass: 'p-button-danger',
    //     accept:(test) => {
    //       console.log(test)
    //     this.$toast.add({severity:'warn', summary:'ยืนยันเรียบร้อย', detail:'ผู้ใช้งานนี้ถูกลบแล้ว', life: 3000});
    //     },
    //     reject: () => {
    //     this.$toast.add({severity:'info', summary:'ปฏิเสธการยืนยัน', life: 3000});
    //     }
    //     });
    //     },

    async updateuser(id){
        await axios
        .put(`${process.env.VUE_APP_URL}/employee/${id}`,{
        })
        .then(()=>{
          this.name = this.showedit.name,
          this.username = this.showedit.username,
          this.level= this.showedit.level,
          // this.password = this.showedit.password,
          window.location.reload();
          this.$toast.add({severity:'success', summary: 'เรียบร้อย!', detail:'อัพเดตรายละเอียดพนักงานเแล้ว', life: 3000});
        })
        .catch((err)=>{
        if (err.response.status === 408) {
          window.location.reload();}
        });},

    async deleteuser(id){
        await axios
        .delete(`${process.env.VUE_APP_URL}/employee/${id}`,{
        headers: { 'token': localStorage.getItem('token') },})
        .then(()=>{
        const position = this.employee.findIndex((el)=>el._id===id)
        this.employee.splice(position,1)
        this.$toast.add({severity:'warn', summary: 'ดำเนินการเสร็จสิ้น', detail:'ลบผู้ใช้งานแล้ว', life: 3000 });},
        )
        .catch((err)=>{
        if (err.response.status === 408) {
        window.location.reload();}
        });},
    async edituser(id) {
      await axios
      .get(`${process.env.VUE_APP_URL}/employee/${id}`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        this.showedit=res.data.data
        this.display=true,
        console.log(res)
        // this.$router.push('/editu')
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
      },},
    async mounted() {
      await axios
      .get(`${process.env.VUE_APP_URL}/employee`, {
        headers: { 'token': localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res)
        this.employee = res.data.data;
        this.session = true;
      })
      .catch((err) => {
        if (err.response.status === 408) {
          window.location.reload();}
      });
  },
};
</script>

