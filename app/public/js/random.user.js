var userApp = new Vue({
  el: '#userRandomApp',
  data: {
    person:  [
    {

    }
  ]
},
  methods: {
      fetchUsers() {
          fetch('https://randomuser.me/api/')
          .then( response => response.json() )
          .then( json => {userApp.person = json.results[0];})
          ;
      }
  },
  created() {
    this.fetchUsers();
  }
});
