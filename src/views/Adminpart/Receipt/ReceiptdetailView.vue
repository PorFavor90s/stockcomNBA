<template>
<div class="grid">
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
    <div class="col-12"></div>
</div>    
  <div class="col-3 lg:col-offset-3">
    <h1>ระบบแสดงใบรับสินค้า</h1>
  </div>
<div class="col-6 lg:col-offset-3">
<Card>
<template #header>
<div class="col-6 lg:col-offset-10"><h2>ใบรับสินค้า</h2></div>
</template>


<template #subtitle>
<div class="top">
<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 px-5 py-3 ">ผู้ซื้อ: </div>
            <div class="flex align-items-center font-bold text-black m-2 pb-6 py-3 ">inputhere</div>
            <div class="flex align-items-center font-bold text-black m-2 pl-7 py-3 "><i class="pi pi-phone">&nbsp;0600545046</i></div>
        </div>

<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 px-5 py-3 ">ที่อยู่: </div>
            <div class="flex align-items-center font-bold text-black m-2 pb-6 py-3 ">inputhere</div>
            <div class="flex align-items-center font-bold text-black m-2 pl-7 pb-5"><i class="pi pi-envelope"> email@email.com<br><br><i class="pi pi-globe"> write http down there</i></i></div>
        </div>

<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 pl-5 py-3 ">เลขที่ภาษี: </div>
            <div class="flex align-items-center font-bold text-black pl-1 py-3 ">inputhere</div>
            
        </div>
        <hr>
        <div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 px-5 py-3 ">ผู้ขาย: </div>
            <div class="flex align-items-center font-bold text-black m-2 pb-6 py-3 ">{{byid.vender}}</div>
            <div class="flex align-items-center font-bold text-black m-2 pl-7 py-3 "><i class="pi pi-phone">&nbsp;{{byid.venderTelephone}}</i></div>
        </div>

<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 px-5 py-3 ">ที่อยู่: </div>
            <div class="flex align-items-center font-bold text-black m-3 pb-6 py-3 ">{{byid.venderAddress}}</div>
            <div class="flex align-items-center font-bold text-black m-2 pl-7 pb-5"><i class="pi pi-envelope"> email@email.com<br><br><i class="pi pi-globe"> write http down there</i></i></div>
        </div>

<div class="flex">
    <div class="topbottomright">
            <div class="flex align-items-center font-bold text-black m-2 pl-5 py-3 ">เลขที่ภาษี: </div>
            <div class="flex align-items-center font-bold text-black pl-2 py-3 ">-</div>
    </div> 
    <div class="topbottomleft">
        <div class="flex justify-contents-end ">
        <!-- เลือกตำแหน่ง -->
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">1</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">2</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">3</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">4</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">5</div>
    </div>
    </div>

        </div>


        
<div class="flex justify-content-end flex-wrap card-container green-container">
        <!-- เลือกตำแหน่ง -->
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">1</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">2</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">3</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">4</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-black  m-2">5</div>

</div>



<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 pl-5 pb-8 ">เรียนคุณ: </div>
        </div>
</div>

</template>



<template #content>
<h3>พนักงาน : {{byid.employee}}<br/>
ชื่อผู้ขาย : {{byid.vender}}<br/>
ที่อยู่ผู้ขาย : {{byid.venderAddress}}<br/>
โทรศัพท์ผู้ขาย : {{byid.venderTelephone}}<br/>
คลังสินค้า : {{byid.warehouse}}<br/>
การระงับ : {{byid.suspen}}<br/>
เลขที่ใบเสร็จ : {{byid.receiptNo}}<br/>
<br/>
<div class="allpro"> 
<div v-for:="value in byid.data">
สินค้าชิ้นที่ :<br/>
ID ของสินค้า:{{value._id}}<br/>
เลขบาร์โค้ดของสินค้า:{{value.barcode}}<br/>
ชื่อของสินค้า:{{value.name}}<br/>
แบรนด์ของสินค้า:{{value.brands}}<br/>
ประเภทของสินค้า:{{value.type}}<br/>
ค่าใช้จ่ายของสินค้า:{{value.cost}}<br/>
จำนวนของสินค้า:{{value.amount}}<br/>
<br/>
</div>
</div>
</h3>
</template>

<template #footer>
<div class="col-8 lg:col-offset-8"><h5>สร้างเมื่อ :{{byid.createdAt}}</h5></div>
</template>
</Card>
</div>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        document.title = "ใบรับสินค้า";
    },
    data(){
        return{
            byid:{}
        }
    },
    async beforeMount(){
        const receiptid=this.$route.params.id
        await axios
            .get(`${process.env.VUE_APP_URL}/receipts/`+receiptid, {
                headers: { "token": localStorage.getItem("token") },
            })
                .then((res) => {
                this.byid = res.data.data;
                console.log(this.byid)
            })
        
                .catch((err) => {
                if (err.response.status === 408) {
                    window.location.reload();
                }
            });

    }
}
</script>

<style>

</style>