all: full min documentation

full:
	grunt jshint:before_concat
	grunt concat
	grunt jshint:after_concat

min:
	grunt uglify

clean:
	rm dist/*

install:
	npm install

documentation:
	grunt jsdoc