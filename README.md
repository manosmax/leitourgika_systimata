### Build Instructions

To run this next.js based website on docker you need to run the following commands.

Build the docker with: `docker build -t os-course-website-upatras .`. YOu need to run this only once
after making changes to docker related or system related features.

Run in dev mode using `docker-compose up -dev`.

To deploy run `docker-compose up -deploy`

No arguement defaults to dev.

Make sure to be an elevated user, otherwise use `sudo`.

Finally make sure port 3000 is free. Otherwise change the host system mapped port to
some general purpose free port like 3001.