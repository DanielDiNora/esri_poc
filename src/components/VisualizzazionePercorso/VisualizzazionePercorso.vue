<template>
  <div id="Visualizzazione">
    <div id="viewDiv"></div>
    <div id="editor">
      <p>Stai partendo da = {{partenza}}</p>
      <p>Stai arrivando a = {{arrivo}}</p>
    </div>
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
    width: 65%;
}
#editor{
    width: 33%;
}
#Visualizzazione{
    display: flex;
    justify-content: center;
    direction: row;
    margin-top: 30px;
}
</style>