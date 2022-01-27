<template>
  <div class="home">
    <img alt="Vue logo" src="https://www.arpa.umbria.it/Static/img/LOGO_ARPA_UMBRIA_N.png">
    <ricerca-percorso></ricerca-percorso>
    <visualizzazione-percorso></visualizzazione-percorso>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RicercaPercorso from '@/components/RicercaPercorso/RicercaPercorso.vue';
import VisualizzazionePercorso from '@/components/VisualizzazionePercorso/VisualizzazionePercorso.vue';

@Component({
  components: {
    RicercaPercorso,
    VisualizzazionePercorso
  },
})
export default class Home extends Vue {}
</script>
