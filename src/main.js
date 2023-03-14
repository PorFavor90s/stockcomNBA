import router from "./router";
import store from "./store";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
const app = createApp(App);
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import SelectButton from "primevue/selectbutton";
import Textarea from "primevue/textarea";
import TreeSelect from "primevue/treeselect";
import Image from "primevue/image";
import ToastService from 'primevue/toastservice';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Dropdown from 'primevue/dropdown';
import Panel from 'primevue/panel'
import Menubar from 'primevue/menubar'
import Toast from 'primevue/toast';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmDialog from 'primevue/confirmdialog';
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import ScrollPanel from 'primevue/scrollpanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Sidebar from 'primevue/sidebar';
import Tooltip from 'primevue/tooltip';
import Calendar from 'primevue/calendar';
import CascadeSelect from 'primevue/cascadeselect';
import ColorPicker from 'primevue/colorpicker';
import Rating from 'primevue/rating';
import Slider from 'primevue/slider';
import VirtualScroller from 'primevue/virtualscroller';
import Paginator from 'primevue/paginator';
import Divider from 'primevue/divider';


import 'primevue/resources/themes/fluent-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

app.use(PrimeVue);
app.use(store);
app.use(router);
app.use(ToastService);
app.use(ConfirmationService);

app.directive('tooltip', Tooltip);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("InputMask", InputMask);
app.component("InputNumber", InputNumber);
app.component("MultiSelect", MultiSelect);
app.component("Password", Password);
app.component("SelectButton", SelectButton);
app.component("Textarea", Textarea);
app.component("TreeSelect", TreeSelect);
app.component("Image", Image);
app.component("Dropdown",Dropdown);
app.component('Panel',Panel);
app.component('Menubar',Menubar)
app.component('Toast',Toast);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('ColumnGroup',ColumnGroup);
app.component('Row',Row);
app.component('Toolbar',Toolbar);
app.component('Dialog',Dialog);
app.component('ConfirmationService',ConfirmationService);
app.component('ConfirmPopup',ConfirmPopup);
app.component('ConfirmDialog',ConfirmDialog);
app.component('Card',Card);
app.component('Fieldset',Fieldset);
app.component('ScrollPanel',ScrollPanel);
app.component('TabView',TabView);
app.component('TabPanel',TabPanel);
app.component('Sidebar',Sidebar);
app.component('Tooltip',Tooltip);
app.component('Calendar',Calendar);
app.component('CascadeSelect',CascadeSelect);
app.component('ColorPicker',ColorPicker);
app.component('Rating',Rating);
app.component('Slider',Slider);
app.component('VirtualScroller',VirtualScroller);
app.component('Paginator',Paginator);
app.component('Divider',Divider);

app.mount("#app");
