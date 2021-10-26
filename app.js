// Vue app configuration
const app = Vue.createApp({
    // data option - it has to be object with data key
    data() {
        // always return an object
        return {
            // totally up to me
            // all data from data object are merged to a global Vue app instance
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build an amazing apps!',
            vueLink: 'http://vuejs.org'
        }
    },
    // methods option - defines function when something happens
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});

// Vue app is connected to my HTML code
app.mount('#user-goal');
