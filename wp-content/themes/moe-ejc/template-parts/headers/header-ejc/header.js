var primary_menu 	= document.getElementById('primary-menu');

var menu_w_childs	= primary_menu.querySelectorAll('.menu-item-has-children, .page_item_has_children');

var i, menu_item;
for(i=0;i<menu_w_childs.length;i++){
	menu_item = menu_w_childs[i];

	var btn 		= document.createElement('button');
	btn.innerHTML 	= '<i class="fa"></i>';
	btn.className	= 'child_toggle';

	menu_item.appendChild(btn);

	btn.onclick		= function(){
		var btn_parent = this.parentElement;
		var class_menu = btn_parent.className.split(" ");
		var open_class = "child_opened";
		if(class_menu.indexOf(open_class) == -1){
			btn_parent.className += " " + open_class;
		}else{
			btn_parent.className = btn_parent.className.replace( open_class,'');
		}
	}
}

jQuery(document).ready( function(){
	'use strict';
	var search_btn	= jQuery('#primary-search-btn');
	var search_cont	= search_btn.parent();

	search_btn.on('click', function(){
		search_cont.toggleClass('active');
	});
});

jQuery(window).load( function(){
	'use strict';
	header_measurement();
});

jQuery(window).resize( function(){
	'use strict';
	header_measurement();
});

function header_measurement(){
	'use strict';
	var page		= jQuery('#page');
	var header_cont = jQuery('#header-container');
	
	var header_h	= header_cont.outerHeight();
	page.css('padding-top', header_h);
}
