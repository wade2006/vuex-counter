<template>
<div class="counter">
    <p>click {{count}} times ,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
</div>
</template>

<script>
export default {
 data(){
     return{
         count:0
     }
 },
 computed:{
   evenOrOdd(){
       return this.count%2===0 ? '偶数' :'奇数'
   }
 },
 methods:{
     //增加
     increment(){
    this.count=this.count+1
     }
     ,
     decrement(){
         this.count=this.count-1
     },
     incrementIfOdd(){
        if(this.count%2===1){
             this.count=this.count+1
        }

     },

incrementAsync(){
    setTimeout(()=>{
this.count=this.count+1
    },1000)
}

 }
}
</script>

<style>
.counter{
    text-align: center;
}
</style>