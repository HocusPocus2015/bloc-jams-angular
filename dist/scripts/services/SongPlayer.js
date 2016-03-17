(function() {
  function SongPlayer(Fixtures) {
    var SongPlayer = {};
/**
*PRIVATE
* @desc current album
* @type {object}
*/
    var currentAlbum = Fixtures.getAlbum();

/**
*PRIVATE
* @desc current Buzz audio file
* @type {Object}
*/
    var currentBuzzObject = null;
    
/**
*PUBLIC
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
*PUBLIC
* @function playSong
* @desc play song
* @param {Object} song
*/
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };
/**
PUBLIC
* @function getSongIndex
* @desc get index of song
* param {Object} song
*/
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };
    
/**
*PRIVATE
* @desc current song object from list of songs
* @type {Object}
*/
    SongPlayer.currentSong = null;
    
/**
*PUBLIC
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
*PUBLIC
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
*PUBLIC
* @function SongPlayer.previous
* @desc set song to previous
*/
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong):
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
    
    return SongPlayer;
  }
  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();