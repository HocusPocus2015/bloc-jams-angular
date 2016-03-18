(function() {
  function SongPlayer(Fixtures) {
    var SongPlayer = {};
/**
*
* @desc current album
* @type {object}
*/
    var currentAlbum = Fixtures.getAlbum();

/**
*
* @desc current Buzz audio file
* @type {Object}
*/
    var currentBuzzObject = null;
    
/**
*
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      SongPlayer.currentSong = song;
    };
/**
*
* @function playSong
* @desc play song
* @param {Object} song
*/
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };
/**
*
* @function stopSong
* @desc stop the song
* @params {Object} song
*/
    var stopSong = function(song) {
      currentBuzzObject.stop();
      song.playing = null;
    };
/**

* @function getSongIndex
* @desc get index of song
* param {Object} song
*/
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };
    
/**
*
* @desc current song object from list of songs
* @type {Object}
*/
    SongPlayer.currentSong = null;
    
/**
*
* @function SongPlayer.play
* @desc plays current song or new song
* @params {object} song
*/
    
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      }
      else if (SongPlayer. currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }
    };
/**
*
* @function SongPlayer.pause
* @desc pauses current song
* @params {object} song
*/
    
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };
/**
*
* @function SongPlayer.previous
* @desc set song to previous
*/
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;
      if (currentSongIndex < 0) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }
      else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
/**
*
* @function SongPlayer.next
* @desc set song to next
*/
    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;
      
      var lastSongIndex = currentSongIndex.songs.length -1;
      if (currentSongIndex > lastSongIndex) {
        stopSong(SongPlayer.currentSong);
      }
      else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    return SongPlayer;
  }
  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();