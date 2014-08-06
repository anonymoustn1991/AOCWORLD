// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to
// (0,32) to correspond to the base of the flagpole.

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(48.879033, 2.118491),
	mapTypeControl: true,
	panControl: true,
	scaleControl: true,
	zoomControl: true,
	// How you would like to style the map. 
	// This is where you would paste any style found on Snazzy Maps.
	/*styles: [{
		featureType: 'water',
		stylers: [{
			color: '#3abaee'
		}, {
			visibility: 'on'
		}]
	}, {
		featureType: 'landscape',
		stylers: [{
			color: '#f2f2f2'
		}]
	}, {
		featureType: 'road',
		stylers: [{
			saturation: -200
		}, {
			lightness: 45
		}]
	}, {
		featureType: 'road.highway',
		stylers: [{
			visibility: 'simplified'
		}]
	}, {
		featureType: 'road.arterial',
		elementType: 'labels.icon',
		stylers: [{
			visibility: 'off'
		}]
	}, {
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#444444'
		}]
	}, {
		featureType: 'transit',
		stylers: [{
			visibility: 'off'
		}]
	}, {
		featureType: 'poi',
		stylers: [{
			visibility: 'off'
		}]
	}]*/
  }
  var map = new google.maps.Map(document.getElementById('div_carte'),
                                mapOptions);

  setMarkers(map, beaches);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
  ['Lorem ipsum', 48.875344, 2.117847, 1]
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
    var image = 'assets/images/maps-marker.png';
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
