(function() {
  function Fixtures() {
    var Fixtures = {};
    
    var albumPicasso = {
      title: 'The Colors',
      artist: 'Pablo Picasso',
      label: 'Cubism',
      year: '1881',
      albumArtUrl: '/assets/images/album_covers/bj2.jpg',
      songs: [
        { name: 'Blue', length: '161.71', audioUrl: '/assets/music/blue' },
        { name: 'Green', length: '103.96', audioUrl: '/assets/music/green' },
        { name: 'Red', length: '268.45', audioUrl: '/assets/music/red' },
        { name: 'Pink', length: '153.14', audioUrl: '/assets/music/pink' },
        { name: 'Magenta', length: '374.22', audioUrl: '/assets/music/magenta' }
      ]
    };
 
    var albumMarconi = {
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: '/assets/images/album_covers/20.png',
      songs: [
        { name: 'Hello, Operator?', length: '1:01' },
        { name: 'Ring, ring, ring', length: '5:01' },
        { name: 'Fits in your pocket', length: '3:21' },
        { name: 'Can you hear me now?', length: '3:14' },
        { name: 'Wrong phone number', length: '2:15' }
      ]
    };
    
    var albumKiss = {
      title: 'The Kiss',
      artist: 'Kiss',
      label: 'EM',
      year: '2016',
      albumArtUrl: '/assets/images/album_covers/bj7.jpg',
      songs: [
        { name: 'Kiss Me', length: '1:01' },
        { name: 'Kiss Us', length: '5:01' },
        { name: 'Kiss You', length: '3:21' },
        { name: 'Never Kiss', length: '3:14' },
        { name: 'First Kiss', length: '2:15' }
      ]
    };
    
    var albumStreets = {
      title: 'The Streets',
      artist: 'Alley Cats',
      label: 'EM',
      year: '2011',
      albumArtUrl: '/assets/images/album_covers/bj4.jpg',
      songs: [
        { name: 'Hanging Out', length: '1:01' },
        { name: 'Keeping It Real', length: '5:01' },
        { name: 'Swagger', length: '3:21' },
        { name: 'YOLO', length: '3:14' },
        { name: 'Homeless', length: '2:15' }
      ]
    };
    
    var albumSky = {
      title: 'Stary Sky',
      artist: 'Galactis',
      label: 'EM',
      year: '2014',
      albumArtUrl: '/assets/images/album_covers/bj1.jpg',
      songs: [
        { name: 'The Heavens', length: '1:01' },
        { name: 'Overcast', length: '5:01' },
        { name: 'Lend me your telescope', length: '3:21' },
        { name: 'Camping Out', length: '3:14' },
        { name: 'Meteor Shower', length: '2:15' }
      ]
    };
    
    var albumSkater = {
      title: 'The Rebel',
      artist: 'Crew',
      label: 'EM',
      year: '2016',
      albumArtUrl: '/assets/images/album_covers/15.png',
      songs: [
        { name: 'Problem', length: '1:01' },
        { name: 'Angst', length: '5:01' },
        { name: 'Parental Issues', length: '3:21' },
        { name: 'What shall I do?', length: '3:14' },
        { name: 'Who am I?', length: '2:15' }
      ]
    };
    
    var albumSeven = {
      title: 'The Seven',
      artist: 'Another Number',
      label: 'EM',
      year: '2015',
      albumArtUrl: '/assets/images/album_covers/14.png',
      songs: [
        { name: 'Just another number', length: '1:01' },
        { name: 'Keep adding', length: '5:01' },
        { name: 'Sub-attraction', length: '3:21' },
        { name: 'What is 2 + 2?', length: '3:14' },
        { name: 'Deadly Sins', length: '2:15' }
      ]
    };
    
    var albumMountain = {
      title: 'The Climb',
      artist: 'Adventurers',
      label: 'EM',
      year: '2015',
      albumArtUrl: '/assets/images/album_covers/09.png',
      songs: [
        { name: 'Higher higher', length: '1:01' },
        { name: 'Never go back', length: '5:01' },
        { name: 'Slippery Path', length: '3:21' },
        { name: 'The other side', length: '3:14' },
        { name: 'Way down', length: '2:15' }
      ]
    };
    
    Fixtures.getAlbum = function() {
      return albumPicasso;
      return albumKiss;
      return albumStreets;
      return albumSky;
      return albumSkater;
      return albumSeven;
      return albumMountain;
      return albumMarconi;
    };
    
    Fixtures.getCollection = function(numberOfAlbums) {
      var albums = [];
      for (var i = 0; i < numberOfAlbums; i++) {
        albums.push(albumPicasso);
        albums.push(albumKiss);
        albums.push(albumStreets);
        albums.push(albumSky);
        albums.push(albumSkater);
        albums.push(albumSeven);
        albums.push(albumMountain);
        albums.push(albumMarconi);
        
      }
      return albums;
    };
    return Fixtures;
  };
  
  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();