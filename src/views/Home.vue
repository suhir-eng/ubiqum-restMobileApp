<template>
<div class="container">
  <div class="home">
   <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <h1>Restaurants in NY</h1>
     
    <b-button variant="success"  v-on:click="navigate()">Restaurants List</b-button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src


import VueRouter from '../router'


export default {
  name: 'Home',
  components: {
    
    
  },
  methods:{
  navigate() {
                VueRouter.push({ name: "RestList" });
             }
}
}
</script>
<style scoped>
.container{
  display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
background: url("../assets/background-1.png");
background-repeat: no-repeat;
background-size: cover;
}
.logo{
  width: 40%;
  float: none;
  margin-left: 0;
}
.home h1{
  font-size: 150%;
  font-weight: bolder;
  padding-top: 10%;
  padding-bottom: 30%;
}
.home button{
  font-weight: bold;
  font-size: 15px;
  padding-top:10px;
  padding-bottom: 10px;
}

</style>