.PHONY: run

run:
	docker run -u node \
		-w /home/node/app \
		-v ${PWD}:/home/node/app \
		node:16.13.2-alpine3.15 run.js
