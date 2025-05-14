export default function (gulp, config, banner) {
  gulp.task('watch', function () {
    gulp.watch(
      `${config.root}/src/**/*.scss`,
      gulp.series('sass', 'sass:minified', 'sass:modules')
    );

    gulp.watch(
      `${config.root}/src/**/*.mjs`,
      gulp.series('js:process', 'js:process:min', 'js:process:modules')
    );
  });
}
