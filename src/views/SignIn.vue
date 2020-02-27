<template>
    <div>
        <apphead></apphead>
        
       <div class="labels">
            <label>User Email: </label>
            <input id="email" v-model="email" type="email">
        </div>
        <div class="labels">
            <label>Password: </label>
            <input id="pass" v-model="password" type="password">
        </div>
        <b-button variant="success" type="submit" v-on:click="login()" class="butt" style="width:120px;margin-left:12px">Enter Chat</b-button>
        <div class="sign">
        <p>New here?</p>
        <router-link :to="{ name: 'SignUp' }" style="text-decoration:underline;">Sign Up</router-link>
        </div>
        <b-button variant="info" v-on:click="back()" class="butt" style="width:150px;margin-left:10px">Restaurants List</b-button>
        
    </div>
</template>
<script>
import firebase from 'firebase'
import router from '../router'
import AppLogo from '@/components/AppLogo.vue'
export default {
    name :'SignIn',
    components :{
        'apphead':AppLogo
    },
    
    data:function(){
        return{
            email:"",
            password:""
        };
    },
    methods:{
        back(){
     router.push({name: "RestList"});
    },
    login:function(){
             firebase.auth().signInWithEmailAndPassword(this.email,this.password)
             .then(user =>{
                 alert(`You are logged in`);
                 this.$router.push({name: "Chat",params :{email:this.email}})
             },
             err =>{
                 alert(err.message);
             });
           
        }
    }
}

</script>
<style scoped>
.labels{
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
    font-size: 13px;
    margin-top: 15px;

}
.labels label{
    float: left;
    margin-left: 6px;
    margin-top: 4px;
}
.labels input{
    float: right;
    width: 60%;
    padding: 5px;
    border: 1px solid #96c172;
    margin-right: 15px;
}
.butt{
    margin-top: 40px;
    margin-bottom: 40px;
}
.sign{
     display: inline-block;
    width: 100%;

}
.sign p{
    float: left;
    margin-left: 5%;
    width: 45%;
    
    
}
.sign router-link{
    float: right;
     margin-right: 5%;
     width: 45%;
     text-decoration:underline;
}
</style>