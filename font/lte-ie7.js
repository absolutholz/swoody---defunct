/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'swoody\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-user' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x75;&#x73;&#x65;&#x72;',
			'icon-users' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x75;&#x73;&#x65;&#x72;&#x73;',
			'icon-contact' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x75;&#x73;&#x65;&#x72;&#x5f;&#x61;&#x64;&#x64;',
			'icon-info-circle' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x69;&#x6e;&#x66;&#x6f;',
			'icon-help' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x71;&#x75;&#x65;&#x73;&#x74;&#x69;&#x6f;&#x6e;',
			'icon-warning' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x77;&#x61;&#x72;&#x6e;&#x69;&#x6e;&#x67;',
			'icon-search' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;',
			'icon-arrow' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x72;&#x69;&#x67;&#x68;&#x74;',
			'icon-arrow-2' : '&#x69;&#x63;&#x6f;&#x6e;&#x5f;&#x6c;&#x65;&#x66;&#x74;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};