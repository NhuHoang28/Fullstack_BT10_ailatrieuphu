<template>
<div class="app">
    <div> {{q[num].question}}</div>
    <div v-show="!done" v-for="(ans,index) in  q[num].answer" :key="index" @click="check(index)" :class="{choose:index===choose}">
        {{ans}}
    </div>
    <div v-show="done" v-for="(ans,index) in  q[num].answer" :key="index" :class="{choose:index===choose,correctAnswer:index===q[num].correctAnswer}">
        {{ans}}
    </div>
 
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            num: 0,
            done: false,
            choose: -1,
        }
    },
    methods: {
        check(index) {
            this.choose = index;
            this.hengio();
        },
        hengio() {
            setTimeout(() => {
                this.done = true;
                this.next();
            }, 3000)
        },
        next() {
            setTimeout(() => {
                if (this.choose === this.q[this.num].correctAnswer) {
                    this.num++;
                    this.done = false;
                    this.choose = -1;
                }
            }, 3000);
        }
    },
    computed: {
        ...mapGetters({
            q: 'getQ'
        })
    }
}
</script>

<style scoped>
*{
    padding:0px;
    margin: 0px;
    box-sizing: border-box;
    outline: none;
}
.app{
    background-color: rgba(0, 0, 0, 0.3);
    max-width: 500px;
    margin:0px auto;
}
.app div:first-child{ 
    background-color: rgba(0, 0, 0, 0.5);
}
.app div{
    border: 0.2px solid black; 
    margin: 10px;
    padding:10px;
    text-align: center;
}
.choose {
    background-color: red;
}

.correctAnswer {
    background-color: green;
}
</style>
