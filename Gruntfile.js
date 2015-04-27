module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			all: ['src/*.js']
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/test.js',
				dest: 'build/test.min.js'
			}
		},
		bowerRequirejs: {
			target: {
				rjsConfig: 'src/config.js',
				options: {
					baseUrl: './',
					transitive: 'true',
					'exclude-dev': true
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					almond: true,
					name: '../node_modules/almond/almond',
					out: "./build/main.js",
					mainConfigFile: 'src/config.js',
					include: ['js/app/NCI.js']
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-bower-requirejs');

	// Default task(s).
	grunt.registerTask('bower-require', ['bowerRequirejs']);
	grunt.registerTask('default', ['requirejs']);
};
