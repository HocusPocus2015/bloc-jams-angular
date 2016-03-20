(function() {
  function timecode() {
    return functon(seconds) {
      var seconds = NUmber.parseFloat(seconds);
      if (Number.isNan(seconds)) {
        return '-:--';
      }
      var wholeSeconds = Math.floor(seconds);
      var minutes = Math.floor(wholeSeconds / 60);
      var remainingSeconds = wholeSeconds % 60;
      
      var output = minutes + ':';
      if (remainingSeconds < 10) {
        output += '0';
      }
      output += remainingSeconds;
      return output;
    };
  }
  
  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();