new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },

  // Anything within the ready function will run when the application loads
  mounted: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'Tasting',
          description: 'Cake tasting with bakery',
          date: '2017-07-08'
        },
        {
          id: 2,
          name: 'Stuff',
          description: 'This might be some event happening at sometime.',
          date: '2017-10-05'
        },
        {
          id: 3,
          name: 'AdamLoveAffair',
          description: 'Wedding!',
          date: '2017-11-05'
        }
      ];

      // Set the collection of events
      this.events = events;

      // or push them on separately
      // for (var i in events) {
      //   this.events.push(events[i]);
      // }
    },
  
    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        // $remove is a Vue convenience method similar to splice
        this.events.splice(index, 1);        
      }
    }
  }
});