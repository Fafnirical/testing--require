requirejs.config({
	baseUrl: 'js',
	paths: {
		'app': 'app',
		'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
		'jqueryui': '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min',
		'jquery-megamenu': '../bower_components/Accessible-Mega-Menu/js/jquery-accessibleMegaMenu',
	},
	shim: {
		/*'app/NCI': {
			deps: ['jquery', 'jqueryui'],
			exports: 'NCI'
		},*/
		'jqueryui': {
			deps: ['jquery'],
			exports: 'jQuery.ui'
		},
		'jquery-megamenu': {
			deps: ['jquery'],
			exports: 'jQuery.fn.accessibleMegaMenu'
		}
	}
});

require(['jquery', 'jqueryui']);
