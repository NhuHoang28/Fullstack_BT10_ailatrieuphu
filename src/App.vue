<template>
  <div id="app">  
    <question/>
  </div>    
</template>

<script> 
import Question from "./components/Question"
export default { 
   components:{
     Question
   }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
