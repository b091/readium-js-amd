const gulp = require('gulp');
const path = require('path');
const plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*']
});
const joinPath = path.join;
plugins.joinPath = joinPath;
const config = {
	projectDir: __dirname,
	srcDir: joinPath(__dirname, 'src'),
	distDir: joinPath(__dirname, 'dist')
};

gulp.task('dist', require('./tasks/build')(gulp, plugins, config));


gulp.task('default', ['dist']);