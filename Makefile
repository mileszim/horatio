all: full min

full:
	grunt concat

min:
	grunt uglify

clean:
	rm horatio.js horatio.min.js