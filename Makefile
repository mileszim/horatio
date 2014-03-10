all: full min

full:
	uglifyjs -b indent-level=4 --comments all \
	-o horatio.js \
	scripts/horatio.js \
	scripts/lib/*.js \

min:
	uglifyjs \
	-o horatio.min.js \
	scripts/horatio.js \
	scripts/lib/*.js \

clean:
	rm horatio.js horatio.min.js