<template>
  <div class="Ricerca">
  <b-table striped hover 
          :items="items"
          :bordered="bordered"
          :fields="fields"
           class="Table">
  </b-table>
  </div>
</template>

<script src="./protocolloAttivita.ts" lang="ts">
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
.Table{
  margin-top: 30px;
  margin-bottom: 30px;
  width:80%
}
.Ricerca{
  display:flex;
  flex-direction:column;
  align-items:center;
}
input{
  margin: 20px;
}
</style>
