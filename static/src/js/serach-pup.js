$('.search-query').on('keyup paste',function() {
// $('.search-query').keypress(function() {
if($('.search-query').val() !=''){
  $('#hits').show();  
}

 });
 
 
$(document).mouseup(function(e) 
{ var container = $('#hits');
//  if the target of the click isn't the container nor a descendant of the container 
 if (!container.is(e.target) && container.has(e.target).length === 0) 
 { container.hide();
  } 
  });
