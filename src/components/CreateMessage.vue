<template>
    <div class="container" style="margin-bottom:10px">
        <form @submit.prevent="createMessage" style="margin-top:8px;">
            <div class="form-group" style="margin-bottom:10px;">
                <input type="text" name="message" class="form-control" placeholder="Enter message..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{errorText}}</p>
            </div>
           <b-button variant="success" class="btn btn-primary" type="submit" name="action"  >Send</b-button>
            <b-button variant="info" v-on:click="back()" class="butt" style="width:150px;margin-left:10px;margin-top:10px;">Restaurants List</b-button>
        </form>

    </div>
</template>
<script>
import router from '../router'
import fb from '@/components/firebaseInit'
export default {
    name:'CreateMessage',
    props:['email'],
    data(){
        return{
            newMessage :null,
            errorText :null
        }
    },
    methods:{
        createMessage (){
            if (this.newMessage){
                fb.collection('message').add({
                    message:this.newMessage,
                    email:this.email,
                    timestamp:Date.now()
                }).catch(err =>{
                    console.log(err);
                });
                this.newMessage =null;
                this.errorText =null;
            }else{
                this.errorText = "A message must be entered first!";
            }
        },
        back(){
     router.push({name: "RestList"});
    }
    }
}
</script>