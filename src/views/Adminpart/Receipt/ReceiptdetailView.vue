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
<div class="col-3 lg:col-offset-9 pl-6"><h2>ใบรับสินค้า</h2></div>
</template>


<template #subtitle>
<div class="top">
<div class="flex">
            <div class="flex align-items-center font-bold text-black m-3 pl-4 ">ผู้ซื้อ: </div>
            <div class="flex align-items-center font-bold text-black m-2 pb-6 py-3 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inputhere</div>
            <div class="flex-row">
            <div class="flex align-items-center font-bold text-black m-2 pl-8 pt-7 "><i class="pi pi-phone"> 060-0545046</i></div>
            <div class="flex align-items-center font-bold text-black m-2 pl-8 pt-2"><i class="pi pi-envelope"> email@email.com<br><br>
            <i class="pi pi-globe"> write http here </i></i></div>
            </div>
</div>
<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 px-5 pb-8 ">ที่อยู่:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........</div>
</div>
<div class="flex pt-1">
            <div class="flex align-items-center font-bold text-black m-2 pl-5 pb-8 ">เลขที่ภาษี:&nbsp;&nbsp;.........</div>
</div>

<div class="card">
    <div class="flex flex-row-reverse flex-wrap card-container ">
        <div class="flex   surface-100 font-bold text-black border-round m-2 col-4">
            เลขที่เอกสาร :&nbsp;&nbsp;{{byid.receiptNo}}<br>
            วันที่ออก :&nbsp;{{byid.createdAt}}<br>
            เครดิต : <br>
            วันที่ครบกำหนด : <br>
            อ้างอิง :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<br>
            เลขที่ใบกำกับภาษี :&nbsp;&nbsp;-<br>
            วันที่ใบกำกับภาษี :&nbsp;&nbsp;&nbsp;&nbsp;-<br>
        </div>
    </div>
</div>
        <hr>
<div class="flex w-4rem h-4rem">
    <div class="mixedit">
        <div class="flex align-content-start font-bold text-black m-2 pl-4 col-12">vender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{byid.vender}}
            <div class="flex-row pl-3 pb-8">
            <div class="flex align-items-center font-bold text-black m-2 pl-8 "><i class="pi pi-phone">&nbsp;&nbsp;{{byid.venderTelephone}}</i></div>
            <div class="flex align-items-center font-bold text-black m-2 pl-8 pt-2"><i class="pi pi-envelope">&nbsp;&nbsp;email@email.com<br><br>
            <i class="pi pi-globe">&nbsp;&nbsp;write http here </i></i></div>
            </div>
            <div class="flex align-content-end font-bold text-black m-3 col-3 pr-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ติดต่อกลับที่ :</div>
            <div class="flex-column grid ">
            <div class="flex align-items-center font-bold text-black m-2 pt-4 pr-7"><br><i class="pi pi-user">&nbsp;{{byid.employee}}</i></div>
            <div class="flex align-items-center font-bold text-black m-2 pt-1 "><i class="pi pi-phone">&nbsp;099-8623156</i></div>
            <div class="flex align-items-center font-bold text-black m-2 pt-3 "><i class="pi pi-envelope">&nbsp;Emailhere@email.com</i></div>
            </div>   
        </div>
    </div>
</div>
<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 pl-4  pt-5">ที่อยู่:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{byid.venderAddress}}</div>
</div>
<div class="continue">
    <div class="tax">
            <div class="flex align-items-center font-bold text-black m-2 pl-4 pt-5 ">เลขที่ภาษี:&nbsp;&nbsp;&nbsp;-</div>     
    </div>
</div>            
<div class="flex">
            <div class="flex align-items-center font-bold text-black m-2 pl-4 pb-8 ">เรียนคุณ: </div>
</div>
</div>
</template>


<template #content>
<div class="centerr">
<div class="flex surface-100 font-bold text-black border-round">
        <div class="col-7">คำอธิบาย <br> 
        </div> 
    <hr>
    <div class="col">จำนวน</div><hr>
    <div class="col">ราคา</div><hr>
    <div class="col">ส่วนลด</div><hr>
    <div class="col">VAT</div><hr>
    <div class="col-2">มูลค่าก่อนภาษี</div>
</div>

<div class="flex-row ">
    <h3>1</h3>
    <h3>2</h3>
    <h3>3</h3>
</div>
<hr>
<div class="flex col-11 pt-2">
    <div class="col-12 md:col-6 lg:col-2"><b><i class="pi pi-server"></i> สรุป</b></div>
    <div class="col-12 md:col-6 lg:col-6"><b>มูลค่ารายการไม่มีหรือยกเว้นภาษีมูลค่าเพิ่ม</b>  
    <br><b>จำนวนเงินทั้งสิ้น</b>  
    </div>
    <div class="col-12 md:col-6 lg:col-1 ">.......บาท
    <br>ver.อ่าน
    </div>
    <div class="flex align-items-center  surface-100 font-bold text-black border-round col-12 md:col-6 lg:col-4">
      จำนวนเงินทั้งสิ้น&nbsp;...................... บาท
    </div>
</div>
    <div class="flex col-12">
        <div class="col-7"></div>
        <div class="col-5 pl-5"><b> จำนวนเงินที่ถูกหัก ณ ที่จ่าย 0.00 บาท<br>จำนวนเงินที่ต้องชำระ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...........บาท</b></div>
    </div>
<hr>
<div class="flex col-10">
    <div class="col-2 pr-1"><i class="pi pi-money-bill"></i><b> ชำระเงิน</b></div>
    <div class="col-3 pl-3"><b>วันที่ชำระ :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;............  <br><b>จำนวนเงินรวม :</b> ...........</div>
    <div class="col-6 pl-5">สำรองรับจ่าย ..................................................</div>
    <div class="col-2">.........บาท</div>
</div>
<hr>
<div class="col-2"><i class="pi pi-comment"><b> หมายเหตุ</b></i></div>
<hr>
<div class="col-2"><span><i class="pi pi-verified"><b> การรับรอง</b></i></span></div>
<div class="flex col-12">
<div class="col-2"><span><b><small>แสกนเพื่อเปิดด้วยเว็บไซต์</small></b></span></div>
<div class="col-2"><span><b><small>ผู้ออกเอกสาร(ผู้ซื้อ)</small></b></span></div>
<div class="col-2"><span><b><small>ผู้อนุมัติเอกสาร(ผู้ซื้อ)</small></b></span></div>
<div class="col-2"><span><b><small>ตราประทับ(ผู้ซื้อ)</small></b></span></div>
<div class="col-2"><span><b><small>ผู้รับเอกสาร(ผู้ขาย)</small></b></span></div>
<div class="col-2"><span><b><small>ตราประทับ(ผู้ขาย)</small></b></span></div>
</div>
</div>
</template>





<!-- <h3>พนักงาน {{byid.employee}}<br/>
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
</h3> -->


<template #footer>
<div class="col-4 lg:col-offset-9"><h5>สร้างเมื่อ:{{byid.createdAt}}</h5></div>
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