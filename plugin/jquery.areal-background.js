jQuery.fn.arealBackground = function() {
  return jQuery(this).each(function() {
    var elem = jQuery(this);
    var startingPosition = elem.css('backgroundPosition').match(/(-?\d+)/g);
    elem.css('backgroundAttachment', 'fixed');
    var scrollFunction = function(elem, startingPosition) {
      return function() {
        var windowElem = jQuery(this);
        var offsetX = startingPosition[0] - (windowElem.scrollLeft() / 4);
        var offsetY = startingPosition[1] - (windowElem.scrollTop() / 4);
        elem.css('backgroundPosition', offsetX + 'px ' + offsetY + 'px');
      };
    } (elem, startingPosition);
    jQuery(window).scroll(scrollFunction);            
  });
}