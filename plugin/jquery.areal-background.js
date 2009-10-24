/*
 * Areal background plugin for jQuery
 * http://michael-van-engelshoven.de/projects/jquery/areal-background
 *
 * Copyright (c) 2009 Michael van Engelshoven
 * Licensed under the GNU General Public License, version 2.
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 * Date: Sat, 24 Oct 2009
 * Version: 0.1
 */
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