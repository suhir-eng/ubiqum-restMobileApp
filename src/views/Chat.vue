<template>
<div>
    <apphead></apphead>
    <div class="container chat">
     <h2 class="text-primary text-center">Real Time Chat</h2>
     <p style="margin:0;font-size:15px;">{{this.email}}</p>
      <div class="card">
          <div class="card body">
              <p class="text-secondary nomessages" v-if="messages.length == 0">
                  [No messages yet!]
              </p>
              <div class="messages" v-chat-scroll="{always:false, smooth:true}">
                  <div v-for="message in messages" :key="message.id">
                      <span class="text-info">{{message.email.split("@",1)[0]}}: </span>
                      <span>{{message.message}}</span>
                      <span class="text-secondary time">{{message.timestamp}}</span>
                  </div>
              </div>
          </div>
          <div class="card-action">
              <CreateMessage :email="email"/>
          </div>
      </div>
    </div>
</div>
</template>
<script>
import fb from '@/components/firebaseInit'
import router from '../router'
import AppLogo from '@/components/AppLogo.vue'
import CreateMessage from '@/components/CreateMessage'
import moment from 'moment'
export default {
    name:'Chat',
    props :['email'],
    components:{
        'apphead':AppLogo,
        CreateMessage
    },
     created (){
        let ref = fb.collection('message').orderBy('timestamp');
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change => {
                if (change.type = 'added'){
                    let doc = change.doc;
                    this.messages.push({
                        id :doc.id,
                        email :doc.data().email,
                        message:doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    })
                }
            });
        })
    },
    data(){
        return{
           messages :[]
        }
    }
   
}
</script>
<style scoped>
.chat h2{
    font-size: 20px;
    margin-bottom: 0px;
    color:#17a2b8 !important;
}
.chat span{
    font-size: 15px;
}
.chat .time{
    display: block;
    font-size: 10px;
    margin-bottom: 5px;
}
.messages{
    max-height: 300px;
    overflow: auto;
    text-align: left;
    padding:0 5px 0 5px;
}

</style>