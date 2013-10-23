all: min
	uglifyjs -b --comments all -o horatio.js scripts/horatio.js scripts/lib/*

min:
	uglifyjs -o horatio.min.js scripts/horatio.js scripts/lib/*

clean:
	rm horatio.js horatio.min.js