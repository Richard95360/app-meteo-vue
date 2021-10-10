<template>
    <div class="header-top">
        <p>{{ titre }}</p>
    </div>
</template>

<script>
import { bus } from '../main'
 export default {
     
     name:'Header',
     data(){
         return{
             titre: 'La To-Do Liste'
         }
     },
     beforeCreate(){
         console.log('il va être crée !');

     },
     created(){
         console.log("le composant est créé!");
         bus.$on('changeTitre', (data) => {
             this.titre = data

         })
     },
     beforeMount(){
         console.log("Il va être monté dans le DOM!");
     },
     mounted(){
         console.log("Il integré dans le DOM!");
     },
     beforeUpdate(){
         console.log("Il va se mettre à jour");
     },
     updated(){
         console.log("le composant s'est bien mis à jour!");
     }
 }
</script>

<style scoped>

  .header-top{
      position: fixed;
      top: 0;
      height: 50px;
      background: #333;
      color: #f1f1f1;
      width: 100%;
      text-align: center;
      line-height: 50px;
      font-size: 25px;
  }
</style>