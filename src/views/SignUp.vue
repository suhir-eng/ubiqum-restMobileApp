<template>
    <div>
        <apphead></apphead>
     <div class="labels">
            <label for="email">User Email: </label>
            <input id="email" v-model="email" type="email">
        </div>
        <div class="labels">
            <label for="password">New Password: </label>
            <input id="pass" v-model="password" type="password">
        </div>
        <div style="width:100%">
          <b-button variant="success" v-on:click="signup()" class="butt" style="width:40%">Sign Up</b-button>
        </div>
        <b-button variant="info" v-on:click="back()" class="butt" style="width :60%">Restaurants List</b-button>
    </div>
</template>
<script>
import firebase from 'firebase'
import firebaseApp from '../components/firebaseInit'

import router from '../router'
import AppLogo from '@/components/AppLogo.vue'
export default {
    name:'SignUp',
    components :{
        'apphead':AppLogo
    },
    data:function(){
        return{
            email:"",
            password:""
        };
    },
    methods: {
        signup:function(){
             firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
             .then(user =>{
                 alert(`Account created`);
                 this.$router.push('/SignIn')
             },
             err =>{
                 alert(err.message);
             });
            
        },
        back:function(){
            router.push({ name: "RestList" });
        }
    }
    
    
};
</script>
<style scoped>
.labels label{
    margin-top: 5%;
}
.labels input{
    
    
    border: 1px solid #96c172;
    margin-bottom: 5%;
}
.butt {
    
    margin-bottom: 5%;
    margin-top: 10%;
}
</style>