<template>
  <div class="Ricerca">
    <form @submit.prevent="onSubmit">
      <label for="partenza">Partenza</label>
      <input type="text" name="partenza" v-model="partenza">
      <label for="arrivo">Arrivo</label>
      <input type="text" name="arrivo" v-model="arrivo">
      <button>Cerca</button>
    </form>
  <b-table striped hover 
          :items="items"
          :bordered="bordered"
          :fields="fields"
           class="Table">
     <template #cell(actions)="row">
        <b-button @click="info(row.item)" class="mr-1">
          ADD
        </b-button>
      </template>
  </b-table>
  </div>
</template>

<script src="./RicercaPercorso.ts" lang="ts">
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

}
input{
  margin: 20px;
}
</style>
