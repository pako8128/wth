all: public/css/style.css

public/css/style.css: scss/style.scss
	sassc scss/style.scss public/css/style.css
