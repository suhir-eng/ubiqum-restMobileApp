<template>
<div id="list">
    <div class="header">
          <img alt="Vue logo" src="../assets/logo.png" class="logo">
          <h1>Restaurants in NY</h1>
           <hr style="border-width:2px;">
    </div>
</div>
</template>
<script>
export default {
  name: 'AppLogo'
  
}
</script>
<style>
.list{
    padding: 10px 10px 0 10px;
}
.header{
    display: inline-block;
    padding: 10px 0 0 0;
}
.logo{
    width: 10%;
    float: left;
    margin-left: 5%;
}
.header h1{
    font-size: 20px;
    padding-top: 5%;
}
</style>