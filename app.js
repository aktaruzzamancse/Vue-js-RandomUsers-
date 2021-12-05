const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getApiUser() {
            const res = await fetch('https://randomuser.me/api'); // Fetching api data
            //console.log(res);
            const { results } = await res.json(); // Destructuring results from json
            //console.log(results);
            //Set new values that will get   API response  
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large


        }
    },
})

app.mount('#app')