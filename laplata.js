
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
        '<p>It was officially founded by Governor Dardo Rocha on 19 November 1882" (Wikipedia).</p>' +
        '<img src = "laplata.jpg">';
        var laplataInfo = new google.maps.InfoWindow({
        content: laplataString
        });
        laplata.addListener('click', function () {
        laplataInfo.open(map, laplata);
        });

        var house1 = new google.maps.Marker({
          position: {lat: -34.936844, lng: -57.946350},
          map: map,
          title:"Early Childhood Home"
        });
        var house1String = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        "<h1>Early Childhood Home</h1>" +
        '<p>This house is situated in from of a park. I lived there until I was 9 years old</p>' +
        '<p>My parents bought a department in the second floor when they did not have kids.</p>' +
        '<p>After having 5 kids, they decided to buy also one department in the first floor that was for sale".</p>' +
        '<img src = "home1.jpg">';
        var house1Info = new google.maps.InfoWindow({
        content: house1String
        });
        house1.addListener('click', function () {
        house1Info.open(map, house1);
        });

        var house2 = new google.maps.Marker({
          position:  {lat: -34.894251, lng: -57.987067},
          map: map,
          title:"Home since 9 to 23 years old"
        });
        var house2String = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        "<h1>Home since 9 to 23 years old</h1>" +
        '<p>We moved there when I was 9 years old.</p>' +
        '<p>My parents were building it for 4 years.</p>' +
        '<p>They still live there.".</p>' +
        '<img src = "home2.jpg">';
        var house2Info = new google.maps.InfoWindow({
        content: house2String
        });
        house2.addListener('click', function () {
        house2Info.open(map, house2);
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