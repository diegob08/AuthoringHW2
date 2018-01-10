module.exports = function(grunt){
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

  concat : {

    //configure the concat task
    dist: {
      src: [
        'js/modules/*.js',
        'js/main.js'
      ],
      dest: 'prod/production.js'
    }
  },

  uglify : {
    build : {
      src : 'prod/production.js',
      dest : 'prod/production.min.js'
      }
    },

    watch: {
      scripts : {
        files : ['js/main.js', 'js/modules/*.js'],
        tasks : ['concat', 'uglify'],
        options : {
          spawn: false
        }
      },
      sass : {
        files : ['sass/main.scss'],
        tasks: ['sass']
      }
    },

<<<<<<< HEAD
      sass: {
        dist:{
          options : {
            style : "compressed"
          },

        files: {
          'css/main.css' : 'sass/main.scss'
        }
      }
    }
=======
>>>>>>> f53bf113066f2e5590d7e9e3a763b6694fe88707
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
<<<<<<< HEAD
grunt.loadNpmTasks('grunt-contrib-sass');


grunt.registerTask('default', ['concat', 'uglify']);
grunt.registerTask('watchFiles', ['watch','sass']);
=======



grunt.registerTask('default', ['concat', 'uglify']);
grunt.registerTask('watchFiles', ['watch']);
>>>>>>> f53bf113066f2e5590d7e9e3a763b6694fe88707
};
