$(function() {
  'use strict';

  var Map = {
    mapSelectorId: 'contacts-map',
    map_center: { lat: 45.453582, lng: 11.340414 },
    map_markers: [
      {
        title: "Sede legale",
        partial: "\
          <div style=\"width: 190px;\" class=\"text-left\">\
            <h4 class=\"title abstract__title\">Sede legale:</h4>\
            <p class=\"abstract__text\">Via Trento 1/b, 37047<br>San Bonifacio (VR)</p>\
          </div>\
        ",
        position: {
          lat: 45.401354,
          lng: 11.269938
        }
      },
      {
        title: "Sede operativa",
        partial: "\
          <div style=\"width: 190px;\" class=\"text-left\">\
            <h4 class=\"title abstract__title\">Sede operativa:</h4>\
            <p class=\"abstract__text\">Corte delle filande 16, 36075<br>Montecchio Maggiore (VI)</p>\
          </div>\
        ",
        position: {
          lat: 45.505810,
          lng: 11.410890
        }
      }
    ],

    mapHandler: null,

    mapStyles: [
      {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
      {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
      {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
      {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
      {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
      {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
      {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
      {"featureType":"water","elementType":"all","stylers":[{"color":"#6186a1"},{"visibility":"on"}]}
    ],

    mapDefaultOptions: {
      zoom: 10,
      scrollwheel: false
    },

    getOptions: function() {
      var options = this.mapDefaultOptions;
      options.center = this.map_center
      return options;
    },

    createMarker: function(datum) {
      var component = this;
      var infoWindow = new google.maps.InfoWindow({ content: datum.partial });

      var marker = new google.maps.Marker({
        position: datum.position,
        map: this.mapHandler,
        title: datum.title,
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', function() {
        infoWindow.open(component.mapHandler, marker);
      });
    },

    createMarkers: function(data) {
      var component = this;

      $.each(data, function(index, value) {
        component.createMarker(value)
      });
    },

    init: function() {
      var wrapper = document.getElementById(this.mapSelectorId);
      this.mapHandler = new google.maps.Map(wrapper, this.getOptions());
      this.mapHandler.setOptions({ styles: this.mapStyles });
      this.createMarkers(this.map_markers);
    },

    destroy: function() {}
  };

  Map.init();
});
