# Omega_notifications

# Install npm SASS
npm install -g sass

# Run command to update CSS by editing SCSS
sass --watch src/scss:src/css

# Run npm installs for gulp to work
npm install gulp
npm install gulp-concat
npm install gulp-minify-css
npm install gulp-autoprefixer
npm install gulp-rename

# So you can run "gulp" command in root and have .min.css file exported
# will export all css into min file inside dist/css
gulp min-css-export