/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({


});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(49.2827, -123.1207),
          zoom: 8
        };


      }
    }
  });

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
	// We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance,
        title: "Going Grocery Shopping"
      });

      var infowindow = new google.maps.InfoWindow({
        content: "<h3>Going Grocery Shopping</h3>"+
        "<h5>Just pay for your own groceries, free ride with Jay.</h5>"
      });

      marker.addListener('click', function() {
        console.log("hey click");
        infowindow.open(GoogleMaps.maps.exampleMap.instance, marker);
      });

    });
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
