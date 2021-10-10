import { default } from '../App.vue';

<template>
  <div class="container mt-5">
   
   <h1 class="p-2">Rentrer vos chose à faire.</h1>
   <form>

     <div class="form-group">

       <label for="action">Action</label>
       <input v-model="formData.tache" type="text" id="action" class="form-control">
     </div>

     <button v-on:click.prevent="creationItem" class="btn-primary mb-3">Créer une tâche</button>
   </form>
   <ul>

     <li v-bind:key="index" v-for="(tache,index) in tableauTaches">
       <item v-bind:id="index" :tache="tache" :suppression="suppression" >

       </item>




     </li>
   </ul>
  
  </div>
      
</template>

<script>

import Item from './Item'


export default {

  name: "Contenu",
  data() {
    return{
      formData: {
        tache:''
      },
      tableauTaches:['Javascript','Vue','Python','React']
    }
  
  },
  methods:{
    creationItem: function(){
      this.tableauTaches.push(this.formData.tache)
      this.formData.tache = ''
    },
    suppression: function(e){
      this.tableauTaches.splice(e.target.parentNode.id, 1)
    }

  },
  components:{
    'item': Item
    
  }
}
 

</script>

<style>
h1 {
  margin-top: 100px !important;
}
ul{
  list-style-type: none;
  padding: 0;
}

</style>