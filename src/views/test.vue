<template>
    <!-- ### หน้านี้ถูกสร้างไว้ Test โค้ดต่างๆนะ ###  -->
    <div class="col-1"><Button icon="pi pi-backward" class="p-button-outlined p-button-info" @click="backtopro()"/></div>
    <div><h2>หน้านี้ไว้ใช้ TEST Code ต่างๆนะไว้เช็ค Error และทดลองโค้ดต่างๆได้</h2></div>
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
        <ConfirmDialog group="positionDialog"></ConfirmDialog>

        <h2 >Hide and Seek</h2>
        <Panel header="Header" :toggleable="true">
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>
    </div>

    <div class="col-12 md:col-4 p-5">
                <ScrollPanel style="width: 100%; height: 200px" class="custombar1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                </ScrollPanel>
    </div>


    <div class="card">
            <h2>Custom Headers</h2>
            <TabView class="tabview-custom" ref="tabview4">
                <TabPanel>
                    <template #header>
                        <i class="pi pi-fast-backward"></i>
                        <span>Header 1</span>
                    </template>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                       <i class="pi pi-pause"></i> 
                       <span>Header 2</span>
                    </template>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <i class="pi pi-fast-forward"></i>
                        <span>Header 3</span>
                    </template>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <h2>Positions</h2>
            <div class="grid flex-column">
                <div class="p-col">
                    <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
                    <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
                    <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
                </div>
                <div class="col-12"></div>
                <div class="p-col">
                    <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
                    <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
                </div>
                <div class="col-12"></div>
                <div class="p-col">
                    <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
                    <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
                    <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
                </div>
            </div>
            <div class="col-12"></div>
            <div class="col-12"><h2>Article</h2></div>
            <Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" />
        <Dialog header="Article" v-model:visible="displayBasic2" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
            <div v-for="i in 2" :key="i">
                <p>
                    <b>Paragraph 1</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
                <br />
                <p>
                    <b>Paragraph 2</b>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <br />
                <p>
                    <b>Paragraph 3</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                    molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <br />
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus />
            </template>
        </Dialog>
        <div class="col-12"></div>
        <div class="col-12">Sidebar but actually we didn'use it anyway</div>
        <div class="col-12"></div>
        <div>
        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
        <Button icon="pi pi-arrow-up" @click="visibleTop = true" class="mr-2"  />
        <Button icon="pi pi-arrow-down" @click="visibleBottom = true" class="mr-2"  />
        <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2"  />
        <Button icon="pi pi-th-large" @click="visibleFull = true"  />

        <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
            <h3>แถบบาร์ทางด้านซ้าย</h3>
            Left Tab Bar View
        </Sidebar>

        <Sidebar v-model:visible="visibleRight" :baseZIndex="10000" position="right">
            <h3>แถบบาร์ทางด้านขวา</h3>
            Right Tab Bar View
        </Sidebar>

        <Sidebar v-model:visible="visibleTop" :baseZIndex="10000" position="top">
            <h3>แถบบาร์ทางด้านบน</h3>
            Top Tab Bar View
        </Sidebar>

        <Sidebar v-model:visible="visibleBottom" :baseZIndex="10000" position="bottom">
            <h3>แถบบาร์ทางด้านล่าง</h3>
            Bottom Tab Bar View
        </Sidebar>

        <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="full">
            <h3>แถบบาร์แบบเต็มหน้าจอ</h3>
            Fullscreen View
        </Sidebar>
        </div>
        <div class="col-12"></div>
        <h2>Calender Zone</h2>
        <div class="col-12"></div>
        <div class="grid col-12 md:col-4">
                <Calendar inputId="icon" v-model="date3" :showIcon="true" />
        </div>
        <div class="col-12"></div>
        <div class="col-12"></div>
        <Calendar v-model="date14" :inline="true"/>
        <div class="col-12"></div>
        <div class="col-12"></div>
        <div class="field col-12 md:col-4">
        <Calendar inputId="time24" v-model="date7" :showTime="true"/>
        </div>

        <div>
        <h2>Cascade!</h2>
        <CascadeSelect v-model="selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"
        :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City" />
        </div>

        <div class="card">
            <h2>Pick Some Color!</h2>
            <div class="flex flex-column align-items-center md:flex-row md:align-items-start">
                <ColorPicker v-model="color3" :inline="true" />
                <div :style="wallStyle" class="mt-5 md:mt-0 md:ml-5 inline-flex">
                    <img :src="src" />
                </div>
            </div>
        </div>
        <div class="col-12"></div>
        <h2>Rating</h2>
        <Rating v-model="val1" :stars="5" onIcon="pi pi-heart-fill" offIcon="pi pi-heart" :cancel="false" />
        <div class="col-12"></div>
        <div class="col-12"></div>
        <h2 id="single">Switch open light</h2>
        <SelectButton v-model="val2" :options="options" aria-labelledby="single" />
        <div class="col-12"></div>
        <div class="col-12"></div>
        <h2>Verticle and Horizontal Slider: {{val3}}</h2>
        <InputText v-model.number="val3" />
        <Slider v-model="val3" orientation="vertical" />
        <Slider v-model="val3" />
        <div class="col-12"></div>
        <div class="col-12"></div>
        <h2>Page Numbers</h2>
        <Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator>

        
</template>
<script>

export default {
 created(){
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate]

        ,document.title = 'ไว้ Test Componentต่างๆ'},
 data() {
    return {
            totalRecords:120,
            basicItems:null,
            val1:null,
            val2:'off',
            val3:20,
            options:['off','on'],
            color3:'474747',
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                {cname: 'Sydney', code: 'A-SY'},
                                {cname: 'Newcastle', code: 'A-NE'},
                                {cname: 'Wollongong', code: 'A-WO'}
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                {cname: 'Brisbane', code: 'A-BR'},
                                {cname: 'Townsville', code: 'A-TO'}
                            ]
                        },

                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                {cname: 'Montreal', code: 'C-MO'},
                                {cname: 'Quebec City', code: 'C-QU'}
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                {cname: 'Ottawa', code: 'C-OT'},
                                {cname: 'Toronto', code: 'C-TO'}
                            ]
                        },

                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                {cname: 'Los Angeles', code: 'US-LA'},
                                {cname: 'San Diego', code: 'US-SD'},
                                {cname: 'San Francisco', code: 'US-SF'}
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                {cname: 'Jacksonville', code: 'US-JA'},
                                {cname: 'Miami', code: 'US-MI'},
                                {cname: 'Tampa', code: 'US-TA'},
                                {cname: 'Orlando', code: 'US-OR'}
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                {cname: 'Austin', code: 'US-AU'},
                                {cname: 'Dallas', code: 'US-DA'},
                                {cname: 'Houston', code: 'US-HO'}
                            ]
                        }
                    ]
                }
            ],
            selectedCity1: null,
            date14:null,
            date3:null,
            date7:null,
            minDate: null,
            maxDate: null,
            invalidDates: null,
            responsiveOptions: [
                {
					breakpoint: '1400px',
					numMonths: 2
				},
				{
					breakpoint: '1200px',
					numMonths: 1
				}],

            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            displayBasic2:false,
            collapsed: true,
            items: [
                {
                    label: 'Options',
                    items: [{
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                        }
                    }
                ]},
                {
                    label: 'Navigate',
                    items: [{
                        label: 'Vue Website',
                        icon: 'pi pi-external-link',
                        url: 'https://vuejs.org/'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        command: () => {
                            window.location.hash = "/fileupload"
                        }
                    }
                ]}
            ]
        }
    },
    computed: {
        wallStyle() {
            return {
                backgroundColor: '#' + this.color3
            }
        }
    },

 methods: {
        openBasic2(){
            this.displayBasic2 = true;
        },
        closeBasic2(){
            this.displayBasic2 = false;
        },
        backtopro(){
            this.$router.push('/productmanage')
        },
        toggle(event){
            this.$refs.menu.toggle(event);
        },
        save(){
            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        },
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
                accept: () => {
                    this.$toast.add({severity:'success', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
 
}}
</script>
<style lang="scss" scoped>
  .tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}
.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
.p-panel p {
    line-height: 1.5;
    margin: 0;
}
::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }
.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-ground);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color .2s;

            &:hover {
                background-color: #FF66CC	;
            }
        }
    }

}
</style>