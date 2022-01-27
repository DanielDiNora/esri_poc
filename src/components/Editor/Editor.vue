<template>
  <div class="Ricerca">
      <b-card bg-variant="success" text-variant="white" header="Editor" class="text-center">
        <b-card-text class="body">
          <form @submit.prevent="onSubmit">
            <div class="EditorAdd">
            <input v-model="partenza" @submit.prevent="onSubmit">
            <div @click="onClick" class="btn btn-primary add">+</div>
            </div>
            <li v-for="punto of punti" v-bind:key="punto.id">
              <div class="hidden">{{Partenza}}{{Arrivo}}</div>
            </li>
            <input v-model="arrivo">
            <button class="btn btn-primary" >Cerca</button>
          </form>
        </b-card-text>
      </b-card>
  </div>
</template>

<script src="./Editor.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.add{
  border-color:#336462;
  background-color:#336462;
  text-align:center;
  margin:10px;
}
h1{
    color :#336462;
    width:70%;
    text-align:left;
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
  margin-top: 20px;
  margin-bottom: 20px;
}
.Ricerca{
    width:33%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center
}
button{
    border-color:#336462;
    background-color:#336462;
}
.hidden{
  display:none;
}
.card-header{
  background-color:#336462;
}
.card-body{
  background-color:white;
}
form{
    display: flex;
    flex-direction: column;
    align-items:start;
}
</style>
