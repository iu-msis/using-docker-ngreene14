var profileCard = new Vue({
  el: '#userProfileCard',
  data: {
    users: []
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {profileCard.users = json})
      ;

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchUsers();
  }
});
