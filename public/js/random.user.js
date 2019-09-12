var libraryApp = new Vue({
  el: '#userLibraryApp',
  data: {
    users: []
  },
  methods: {
    fetchUsers() {
      fetch('randomuser.me-sample.json')
      .then( response => response.json() )
      .then( json => {libraryApp.user = json})
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
