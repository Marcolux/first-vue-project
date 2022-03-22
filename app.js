// we create an app variable using Vue, made it available by <script src="https://unpkg.com/vue@next" defer></script>

const app = Vue.createApp({
    data(){
        return {
            // returns always an object the value can be anything
            courseGoal :" Finish the course and learn Vue!",
            courseGoalB :" Master Vue!",
            courseGoalC :"<h1> Master Vue huuuu!<h1>",
            vueLink:"https://vuejs.org"
        }
    },
    // methods set the functions that should be executed we something happens
    methods:{
        // always pass an object
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                // on contrary on what usually happens if I type this, in Vue this. will access to the datas availeble in data(){}
                return this.courseGoal
            }else{
                return this.courseGoalB
            }
        }
    }
})

// first step is to let vue know what part is controlled by vue, because we can have specific sections controlled by vue


// in this case we want section controlled by vue so

app.mount("#user-goal");

// now we use vue features in const app = Vue.createApp() defining data