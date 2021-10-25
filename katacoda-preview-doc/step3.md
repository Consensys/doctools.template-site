To build the doc with the Doctools Docker image, you have to go in the doc site directory and execute the Docker Compose command.

## Task

First, go in the `template-docsite` directory: `cd template-docsite`{{execute}}.

Then run `docker-compose up -d`{{execute}}

Bravo, the preview service is running as a Docker container!

You can now preview your doc by looking at the live served site, here served at https://[[HOST_SUBDOMAIN]]-8000-[[KATACODA_HOST]].environments.katacoda.com for the online demo but will be `http://0.0.0.0:8000` on your local machine.
