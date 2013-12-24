    window.onload = function () {
        var map1 = L.map('map', {
        
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        
        keyboard: false,
        
        zoomControl: false
        

        
        }
        
        
        ).setView([43,-89], 4);
	
	
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

        }).addTo(map1);
        
        L.geoJson(statesData).addTo(map);
        
    };