<template>
<div id="list">
    <apphead></apphead>
     <div style="width:100%;margin-bottom:10px;">
       <input type="text" v-model="search" placeholder="search by Cuisine" style="border: 1px solid #96c172;width: 71%;
              padding: 5px;"/>
     </div>
     <div  id="loader" class="spinner-border text-success" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  
    <div   class="list"  v-for="restaurant in filteredRest" v-bind:key="restaurant.index" align="left">
        
        <div class="labels">
            <label>Name: </label>
            <input :value="restaurant['restaurant'].name" disabled>
        </div>
        <div class="labels">
            <label>Cuisines: </label>
            <input :value="restaurant['restaurant'].cuisines" disabled>
        </div>
        <div class="labels">
            <label>Ratings: </label>
            <input :value="restaurant['restaurant'].user_rating['aggregate_rating']" disabled> 
        </div>

        <div align="right">
            <router-link :to="{ name: 'RestDetails',params: { restid: restaurant['restaurant'].id} }" style="text-decoration:underline;">More details →</router-link>
        </div>

        <hr style="border-width:2px;">
        
    </div>
   
    
</div>



</template>


<script>

import AppLogo from '@/components/AppLogo.vue'
 

export default {
    components: {
        'apphead':AppLogo,
         
    },
    data(){
        return {
      restaurants:[],
      search:""
       
    };
    },
    created() {
    this.fetchData();
     
  },
    
    methods:{
        fetchData: function() {
      fetch("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=25&sort=cost",{method:"GET",
    dataType: 'json',
    headers :{"user-key":"d3cfd10c6d7518c0e563da883e2b96e9"}})
        .then(res => res.json())
        .then(data => {
            document.getElementById("loader").style.display="none";
           this.restaurants = data["restaurants"];
        });
        
     
    }
   
   
    },
     computed: {
        filteredRest:function(){
           return this.restaurants.filter((restaurant)=>{
                return restaurant['restaurant'].cuisines.toLowerCase().match(this.search.toLowerCase());
            });
            
        }
    }
   
}
</script>

<style scoped>

.labels{
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;

}
.labels label{
    float: left;
    margin: 4px 0px;
}
.labels input{
    float: right;
    width: 71%;
    padding: 5px;
}
.labels input:disabled{
    background-color: white;
    border: 1px solid #96c172;
}



</style>