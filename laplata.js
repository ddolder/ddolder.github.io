
      function initMap() {
        // The map, centered at La Plata
         var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.921337, lng: -57.954562},
        zoom: 13,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
      });

        var laplata = new google.maps.Marker({
          position: {lat: -34.921337, lng: -57.954562};
            title:"La Plata"

        var house1 = new google.maps.Marker({
          position: {lat: -34.936844, lng: -57.946350},
          map: map,
          title:"House from 0 to 9 years old"
        });

        var house2 = new google.maps.Marker({
          position:  {lat: -34.894251, lng: -57.987067},
          map: map,
          title:"House from 9 to 23 years old"
        });

        var highschool = new google.maps.Marker({
          position:  {lat: -34.908268, lng: -57.943873},
          map: map,
          title:"Nacional Highschool"
        });

        var university = new google.maps.Marker({
          position:  {lat: -34.907463, lng: -57.944907},
          map: map,
          title:"Engineering National University"
        });

        var church = new google.maps.Marker({
          position:  {lat: -34.906745, lng: -57.954170},
          map: map,
          title:"Tolosa Ward"
        });

        var ushuaia = new google.maps.Marker({
          position:  {lat: -54.817262, lng: -68.333020},
          map: map,
          title:"Ushuaia"
        });
      }