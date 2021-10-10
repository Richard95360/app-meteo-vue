import axios from 'axios';
<template>
<div>

<h1>Les articles de blog !</h1>
<hr>
<ul>

<li v-bind:key="index" v-for="(article, index) in allArticles">
    <router-link :to="`/blogpost/${index + 1}`">
        <div class="card m-2">
            <h3>{{article.title}}</h3>
        </div>
    </router-link>
</li>
</ul>

</div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Page1',
    data(){
        return{
            allArticles:[]
        }
    },
    created(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        //console.log(response);
        for(const blogPost of response.data){
            this.allArticles.push(blogPost)
        }
        
        })
    }
}
</script>

<style>

</style>