all: full

full:
	grunt

min:
	grunt uglify

clean:
	rm dist/*

install:
	npm install

documentation:
	grunt docs