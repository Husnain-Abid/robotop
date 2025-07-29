var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
* NG Responsive Tables v1.1
* Inspiration: http://css-tricks.com/examples/ResponsiveTables/responsive.php
* Author: Tomislav Matijević
* List of functions:
*	- targetTable: Searches for each table row , find td and take its current index.
*      Apply to that index same index of table head or td in first table row ( in case there are no table header applied )
*	- checkForTableHead: If there is no table head defined, use td in first table row as table head (prevention mode)
*/

;(function ($) {
    $.fn.ngResponsiveTables = function() {
        return this.each(function(){
            var dataContent = '',
                $this = $(this),
                init = function(){
                    targetTable();
                },
                targetTable = function(){
                    $this.find('tr').each(function(){
                        $(this).find('td').each(function(i, v){
                            checkForTableHead($(this), i);
                            $(this).addClass('tdno' + i);
                        });
                    });
                },
                checkForTableHead = function(element, index){
                    if ($this.find('th').length ){
                        dataContent = $this.find('th')[index].textContent;
                    } else {
                        dataContent = $this.find('tr:first td')[index].textContent;
                    }
                    element.wrapInner('<div class="td-text"></div>').attr('data-content', dataContent);
                };

            init();
        });
    };

}( jQuery ));


}