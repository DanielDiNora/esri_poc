<template>
  <div class="Ricerca">
   <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-header>
          <b-form @submit.prevent="onSubmit">
    <label for="IDPercorso">IDPercorso</label>
      <input type="text" name="IDPercorso">
      <label for="partenza">Partenza</label>
      <input type="text" name="partenza" v-model="partenza">
      <label for="arrivo">Arrivo</label>
      <input type="text" name="arrivo" v-model="arrivo">
      <button class="btn btn-primary">Cerca</button>
    </b-form>
        </b-card-header>
        <b-card-text>
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
        </b-card-text>
      </b-card>
  
  </div>
</template>

<script src="./RicercaPercorso.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Ricerca{
  display:flex;
  flex-direction:column;
  align-items:center;
}
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
  width: 80%;
  justify-self: flex-center;
}
button{
 background-color: #336462
}
input{
  margin: 20px;
}
.card-body{
  background-color:white;
  padding:0px;
}
label{
  color:black;
}
</style>
