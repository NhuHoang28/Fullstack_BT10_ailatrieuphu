<template>
    <div>
        <question :num="num"/>
    </div>
</template>
<script>
 import Question from "./Question"
export default  {
    data(){
        return {
            num:0
        }
    },
    components:{
        Question
    }
}
</script>
<style scoped>

</style>