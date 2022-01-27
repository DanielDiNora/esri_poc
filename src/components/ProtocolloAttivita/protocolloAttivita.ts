import { Component, Prop, Vue } from 'vue-property-decorator';
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuex)

@Component
export default class ProtocolloAttivita extends Vue {
    items =[
        { ProtocolloID:1, Descrizione: 'Raccolta', Status: 'InProgress',Tipo:'R' },
        { ProtocolloID: 2, Descrizione: 'Trasporto', Status: 'Completed',Tipo:'T' },
    ]
    bordered= true
    fields= [
        { key: 'ProtocolloID', label: 'ProtocolloID', sortable: true, sortDirection: 'desc' },
        { key: 'Descrizione', label: 'Descrizione', sortable: true, class: 'text-center' },
        { key: 'Status', label: 'Status', sortable: true, sortDirection: 'desc' },
        { key: 'Tipo', label: 'Tipo', sortable: true, class: 'text-center' }
    ]
}