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
export default class EditorPercorso extends Vue {
    partenza=""
    arrivo=""
    punti = [""]
    onSubmit (): void {
        console.log("ciAO")
    }
    onClick (): void{
        console.log("attivo")
    }
    get Partenza() {
        this.partenza=this.$store.state.partenza
        return this.$store.state.partenza
    }
    get Arrivo() {
        this.arrivo=this.$store.state.arrivo
        return this.$store.state.arrivo
    }
    get punto() {
        return this.punti
    }
}