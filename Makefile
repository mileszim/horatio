all: full min

full:
	grunt jshint:before_concat
	grunt concat
	grunt jshint:after_concat

min:
	grunt uglify

clean:
	rm horatio.js horatio.min.js

install:
	npm install