all: min
	uglifyjs -b --comments all \
	-o horatio.js \
	scripts/horatio.js \
	scripts/lib/*.js \
	scripts/lib/parser/*.js

min:
	uglifyjs \
	-o horatio.js \
	scripts/horatio.js \
	scripts/lib/*.js \
	scripts/lib/parser/*.js

clean:
	rm horatio.js horatio.min.js