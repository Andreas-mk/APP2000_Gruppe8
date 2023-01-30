// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 59.4088932, lng: 9.0596141 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;