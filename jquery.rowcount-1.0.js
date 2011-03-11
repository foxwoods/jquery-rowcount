/*
 * jQuery Tabe Row Count plugin 1.0
 *
 * http://programmingmind.com
 *
 * Copyright (c) 2010 David Ang
 *
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *   
 *   Version Changes
 *   
 *   1.0 July 6, 2010
 *    - Initial development & release
 *
 *   1.1 Mar 11, 2011
 *    - fixed performance issue, which could cause 100% CPU usage in IE6
 */

(function($){    
	
    $.fn.rowCount = function(options) {
		
		var defaults = {
			startAt : 1,
			column : 1
		}
		
		var options = $.extend(defaults, options);
		
		var numRows = $(this).find("tbody > tr").size();
		var exist = $(this).find("th.rowCount").length;
		
		if (exist) {
			$(this).find('tbody > tr td:nth-child(' + options.column + ')').map(function(i, e){$(e).html(i + options.startAt)});
		} else {
			$(this).find('tr:first th:nth-child(' + options.column + ')').before('<th class="rowCount">#</th>');			
			$(this).find('tbody > tr td:nth-child(' + options.column + ')').map(function(i, e){$(e).before('<td class="rowNumber">' + (i + options.startAt) + '.</td>')});
		}
	};
})(jQuery);