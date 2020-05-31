window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;

    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };