module.exports = (grunt) ->
	name 						= 'yandex-shri'
	

	tplDev		 			= {}
	cssDev 					= {}
	jsDev						= {}
	
	buildFolder 		= '../build'
	tplBuild 				= {}
	cssBuild 				= {}
	cssCompress			= {}
	jsBuild 				= {}

	jqueryBuild     = "http://yandex.st/jquery/1.9.1/jquery.min.js"
	jqueryDev       = "js/libs/jquery.js" 	

	libs 						= []
	
	# pages
	tplDev['index.html']										= 'tpl/index.jade'

	tplBuild["#{buildFolder}/index.html"]	= 'tpl/index.jade'		

	# styles
	cssDev["css/#{name}.css"] 							= 'b/blocks.styl'
	cssDev["css/#{name}.ie.css"] 					= 'b/**/*.ie.styl'
	cssDev["css/#{name}.ie7.css"] 				= 'b/**/*.ie7.styl'

	cssCompress["#{buildFolder}/css/#{name}.min.css"]			= "css/#{name}.css"
	cssCompress["#{buildFolder}/css/#{name}.ie.min.css"]			= "css/#{name}.ie.css"
	cssCompress["#{buildFolder}/css/#{name}.ie7.min.css"]			= "css/#{name}.ie7.css"
	
	# logic written with coffee is compiled to one js
	jsDev["js/#{name}.js"]			 						= 'b/**/*.coffee'

	# concatenated files will be uglyfied for build version 
	jsBuild["#{buildFolder}/js/#{name}.min.js"] = "js/#{name}.js"
	jsBuild["#{buildFolder}/js/libs.min.js"] = "js/libs.js"
	

	grunt.initConfig 
		pkg: grunt.file.readJSON 'package.json'

		jade: 
			dev:
				files: tplDev
				options:
					pretty: true
					data:
						projectName: name
						data:	grunt.file.readYAML 'data.yaml'
						css: 
							common: "css/#{name}.css"
							ie: "css/#{name}.ie.css"
							ie7: "css/#{name}.ie7.css"
						js: "js/#{name}.js"
						plugins: "js/libs.js"
						jquery: jqueryDev
			build:
				files: tplBuild
				options:
					data:
						projectName: name
						data:	grunt.file.readYAML 'data.yaml'
						css: 
							common: "css/#{name}.min.css"
							ie: "css/#{name}.ie.min.css"
							ie7: "css/#{name}.ie7.min.css"
						js: "js/#{name}.min.js"
						plugins: "js/libs.min.js"
						jquery: jqueryBuild

		stylus:
			dev:
				files: cssDev
				options:
					compress: false

		coffee:
			dev:
				files: jsDev

		uglify:
			build:
				files: jsBuild

		cssmin:
			build:
				files: cssCompress		

		watch:
			jade:
				files: ['tpl/**/*.jade', 'b/**/*.jade', 'lib/**/*.jade', 'data.yaml']
				tasks: 'jade:dev'
			stylus:
				files: ['b/**/*.styl', 'lib/**/*.styl']
				tasks: 'stylus:dev'
			coffee:
				files: ['b/**/*.coffee', 'lib/**/*.coffee']
				tasks: ['coffee']

		concat:
			options:
				separator: ';'
			dist:
				src: ['b/**/*.js']
				dest: 'js/libs.js'			

		copy:
			build:
				files: [{
					expand: true
					src: ['b/**', '!b/**/*.jade', '!b/**/*.styl', '!b/**/*.coffee', '!b/**/*.js']
					dest: "#{buildFolder}/"
				}]


	grunt.loadNpmTasks 'grunt-contrib-jade'
	grunt.loadNpmTasks 'grunt-contrib-stylus'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-contrib-concat'

	grunt.registerTask 'default', ['jade:dev', 'stylus:dev', 'coffee', 'concat']
	grunt.registerTask 'build', ['jade:build', 'cssmin', 'uglify', 'copy:build']