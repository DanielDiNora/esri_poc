<template>
  <div id="Visualizzazione">
    <div class="hidden">{{partenza}}{{arrivo}}</div>
    
    <b-card bg-variant="success" text-variant="white" header="Mappa" class="text-center">
          <b-card-text>
            <div id="viewDiv"></div>
          </b-card-text>
    </b-card>
  
    
    <editor-percorso class="editor"></editor-percorso>
  </div>
</template>

<script src="./VisualizzazionePercorso.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#viewDiv {
    padding: 0;
    margin: 0;
    height: 500px;
    width: 100%;
}
.card{
    width: 65%;
}
.card-body{
    width: 100%;
    padding:0px;
}
.card-header{
  background-color:#336462;
}
#editor{
    width: 33%;
}
.hidden{
  display:none
}
#Visualizzazione{
    display: flex;
    direction: row;
    align-items:center;
    justify-content:center;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>