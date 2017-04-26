new Vue({
    //We want to target the div with an id of 'events
    el:"#events",
    
    // Here  we can register any values or collections that hold data for the application
    data : {
        event:{ 
            name: "",
            description: "",
            date: ""
        },
        events: []
    }, 
    
    //Anything within the ready function will run when the application loads
    mounted: function(){
        //When the application loads, we want to call the method that initializez some data
        this.fetchEvents()
    },
    
    //Methods we want to use in our application are registred here
    methods: {
        // We dedicate a methode to retrieving and setting some data
        fetchEvents: function(){
            var events = [
                {
                                    id: 1,
                name: "TIFF",
                description: "Toronto International Film Festival",
                date: "2015-09-10"
                },
                {
                    id: 2,
                    name: "The Martian Premiere",
                    description: "The Martian comes to theatres.",
                    date: "2015-10-02"
                },
                {
                    id: 3,
                    name: "SXSW",
                    description: "Music, film adn interactive festival in Austin, TX.",
                    data: "2016-03-11"
                }                
            ];
            // $set is a convenience method provided by Vue that is similar to pushing data onto an arra
            
//            this.$set("events", events);
            this.events = events;
        },
        
        addEvent: function(){
            if(this.event.name){
                this.events.push(this.event);
                this.event = {name: " ", description: " ", date: " "};
            }
        }, 
        
        deleteEvent: function(index){
            if(confirm("Are you sure you want to delete this event?")){
                this.event.splice(index,1);
//                this.events.$remove(index);
            }
        }
    }
});