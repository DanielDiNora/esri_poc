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
export default class RicercaPercorso extends Vue {
    partenza = ""
    arrivo = ""
    items =[
        { IDPercorso: 1, PuntoA: 'Via Settevalli, Perugia', PuntoB: 'Piazza Partigiani, Perugia',Tipo:'R' },
        { IDPercorso: 2, PuntoA: 'Via Torino,Catania', PuntoB: 'Piazza Stesicoro,Catania',Tipo:'T' },
        { IDPercorso: 3, PuntoA: 'Via Settevalli, Perugia', PuntoB: 'Piazza Partigiani, Perugia',Tipo:'T' },
    ]
    bordered= true
    fields= [
        { key: 'IDPercorso', label: 'IDPercorso', sortable: true, sortDirection: 'desc' },
        { key: 'PuntoA', label: 'PuntoA', sortable: true, class: 'text-center' },
        { key: 'PuntoB', label: 'PuntoB', sortable: true, sortDirection: 'desc' },
        { key: 'Tipo', label: 'Tipo', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Actions' }
    ]


    info(item:any): void {
        console.log(item.IDPercorso)
        this.$store.state.partenza=item.PuntoA
        this.$store.state.arrivo=item.PuntoB
        this.$store.state.tipo=item.Tipo
    }
    onSubmit (): void {
        this.$store.state.partenza=this.partenza
        this.$store.state.arrivo=this.arrivo
        console.log(this.$store.state.partenza)
        console.log(this.$store.state.arrivo)
    }
}