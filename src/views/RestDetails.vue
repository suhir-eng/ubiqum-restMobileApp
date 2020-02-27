<template>
    <div >
        <apphead></apphead>
        <div class="details">
       <div class="name">
       <label>Name:</label>
       <p>{{restaurant.name}}</p>
       </div>
       <a :href="restaurant.menu_url" style="text-decoration:underline">Menu</a>
       <div>
       <img  v-if="restaurant.thumb" :src="restaurant.thumb">
       <img  v-else src="@/assets/restaurant-default-thumb.jpg">
       </div>
        <div class="name">
       <label >Phone No:</label>
       <p>{{restaurant.phone_numbers}}</p>
       </div>
       <div class="name">
       <label>Highlights:</label>
       <p  v-if="restaurant.highlights">{{restaurant.highlights.join(', ')}}</p>
       </div>
       <div class="name">
       <label>Address:</label>
       <p v-if="restaurant.location">{{restaurant.location.address}}</p>
       </div>
       <div class="name">
       <label>Timing:</label>
       <p>{{restaurant.timings}}</p>
       </div>
      <b-button :href="restaurant.url" variant="success" class="butt">Order Now</b-button>
       <b-button variant="success" v-on:click="chat()" class="butt">Chat With Us</b-button>
       <b-button variant="info" v-on:click="back()" class="butt">Restaurants List</b-button>

        </div>
      
    </div>
</template>
<script>
import router from '../router'
import AppLogo from '@/components/AppLogo.vue'
export default {
    name :'RestDetails',
     components: {
        'apphead':AppLogo
    }
    ,
    data() {
        return {
            restaurant: [],
             
        }
    }, created() {
            this.id = this.$route.params.restid;
            this.fetchRest(this.id);
    },

    methods: {
        fetchRest:function(id) {
      fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id="+id,{method:"GET",
    dataType: 'json',
    headers :{"user-key":"d3cfd10c6d7518c0e563da883e2b96e9"}})
        .then(res => res.json())
        .then(data => {
           this.restaurant = data;
        }); 
    },
    chat(){
       router.push({ name: "SignIn" });
    },
    back(){
      router.go(-1);
    }
}
}
</script>
<style scoped>
.name{
    display: inline-block;
    width: 100%;
       padding-left: 10px;
       padding-right: 10px;
    
    
}
.name label{
    float: left;
    margin: 8px 0px;
    width: 32%;

}
.name p{
    float: right;
    margin-top: 8px;
    text-align: left;
    width: 65%;
}
.details img {
    width: 220px;
    margin: 15px;
}
.butt{
    margin: 10px;
}
</style>