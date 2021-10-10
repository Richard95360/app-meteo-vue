<template>
<div>
    <ul class="Liste mt-5">
        <li v-for="(film, index) in myArr" v-bind:key="index">
            <div class="card">
                <div class="card-body">
                   Titre:  {{ film.titre }}
                   <br>
                   Date: {{ film.date }}
                    
                </div>
            </div>

        </li>

    </ul>
    <p>{{ txt }}</p>
    <div v-on:click="supprFilm"   class="btn btn-danger mt-2">Supprime le film</div>
    <div v-on:click="supprTxt"    class="btn btn-danger mt-2 ml-2">Supprime le txt</div>
    <div v-on:click="changeTitre" class="btn btn-danger mt-2 ml-2">Modifier le titre</div>
    <slot>Patienter</slot>
    <slot name="info"> </slot>
</div>
</template>

<script> 

import {bus} from '../../main'

export default {
    name:'Liste',
    data(){
        return{
            fruits:['Orange','Papaye','Fraise']
        }
    },
    methods:{

            supprFilm :function(){
              this.myArr.pop()
          },

            supprTxt :function(){
              this.txt = ""
          },
            changeTitre: function(){
               // this.$emit('changeTitre', 'Mon nouveau Titre')
               bus.$emit('changeTitre' , 'Titre changé avec le bus!')

          }
     },

    //porps est une propriété
    props:['myArr', 'txt']
    
}

</script>

<style scoped src="./Liste.css">

ul{
    background: orange;
}
p{
   color:red;

}

</style>