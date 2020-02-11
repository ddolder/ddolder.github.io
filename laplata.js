      <script>
          function initMap() {
        // The location of La Plata
        var laplata = {lat: -34.921337, lng: -57.954562};
        title:"La Plata"
        // The map, centered at La Plata
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 13, center: laplata});

        var house1 = new google.maps.Marker({
          position: {lat: -34.936844, lng: -57.946350},
          map: map,
          title:"House from 0 to 9 years old"
        });
        house1.setMap(map);

        var house2 = new google.maps.Marker({
          position:  {lat: -34.894251, lng: -57.987067},
          map: map,
          title:"House from 9 to 23 years old"
        });
        house2.setMap(map);

        var highschool = new google.maps.Marker({
          position:  {lat: -34.908268, lng: -57.943873},
          map: map,
          title:"Nacional Highschool"
        });
        highschool.setMap(map);

        var university = new google.maps.Marker({
          position:  {lat: -34.907463, lng: -57.944907},
          map: map,
          title:"Engineering National University"
        });
        university.setMap(map);

        var church = new google.maps.Marker({
          position:  {lat: -34.906745, lng: -57.954170},
          map: map,
          title:"Tolosa Ward"
        });
        church.setMap(map);

        var ushuaia = new google.maps.Marker({
          position:  {lat: -54.817262, lng: -68.333020},
          map: map,
          title:"Ushuaia"
        });
        ushuaia.setMap(map);
      </script>