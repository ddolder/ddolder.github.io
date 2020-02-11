
      function initMap() {
        // The map, centered at La Plata
         var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.921337, lng: -57.954562},
        zoom: 13
        }
      );

        var laplata = new google.maps.Marker({
          position: {lat: -34.921337, lng: -57.954562},
          map: map,
          title:"La Plata"
        });
        var laplataString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        "<h1>La Plata City</h1>" +
        '<p>"La Plata is the capital city of Buenos Aires Province, Argentina.</p>' +
        '<p>According to the 2001 census, it has a population of 765,378 and its metropolitan area has 899,523 inhabitants.</p>' +
        '<p>La Plata was planned and developed to serve as the provincial capital after the city of Buenos Aires was federalized in 1880.</p>' +
        '<p>It was officially founded by Governor Dardo Rocha on 19 November 1882" (Wikipedia).</p>' +
        '<img src = "laplata.jpg">';
        var laplataInfo = new google.maps.InfoWindow({
        content: laplataString
        });
        laplataMarker.addListener('click', function () {
        laplataInfo.open(map, laplataMarker);
        });

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
          title:"'Rafael Hernandez' National Highschool"
        });

        var university = new google.maps.Marker({
          position:  {lat: -34.907463, lng: -57.944907},
          map: map,
          title:"Faculty of Engineering UNLP"
        });

        var church = new google.maps.Marker({
          position:  {lat: -34.906745, lng: -57.954170},
          map: map,
          title:"Tolosa Ward, La Plata Stake"
        });

        var ushuaia = new google.maps.Marker({
          position:  {lat: -54.817262, lng: -68.333020},
          map: map,
          title:"Ushuaia"
        });
      }