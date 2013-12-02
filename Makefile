all: full min

full:
	uglifyjs -b indent-level=4 --comments all \
	-o horatio.js \
	scripts/horatio.js \
	scripts/lib/*.js \
	scripts/lib/line_parser/*.js \
	scripts/lib/parser/*.js \
	scripts/lib/program/*.js \
	scripts/includes/wordlists/*.js

min:
	uglifyjs \
	-o horatio.min.js \
	scripts/horatio.js \
	scripts/lib/*.js \
	scripts/lib/line_parser/*.js \
	scripts/lib/parser/*.js \
	scripts/lib/program/*.js \
	scripts/includes/wordlists/*.js

clean:
	rm horatio.js horatio.min.js