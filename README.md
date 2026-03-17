### Run Instructions

To run this next.js based website on docker you need to follow the instructions bellow.

This project uses `docker-compose`. In order to compose the container run `docker-compose up`; use `-d` flag
to detach the shell. 

Run `docker-compose build dev` to build the development container and `docker-compose build prod` to build the production container. For dev you only need to build once and changes automatically refresh via a shared volume.
For prod you have to build each time changes are applied. 

Run `docker-compose up dev` to run the development container and `docker-compose up prod` to run the production container. 

Run `docker-compose down --remove-orphans` between builds and interchanging environments to ensure no collisions from prior builds or runs happen. 

Default host ports are 3000 for dev and 8080 for build. You can change these in the `docker-compose.yaml` file
though handling them through reverse proxies is strongly advised, if possible.

### Adding New Handouts

In order to add a new handout you need to perform 3 mandatory steps:

1. Add the PDF of the handout in the `@/public/handouts/` directory. Follow the naming convention already used and
actively avoid case senstivice namings.
2. List the handout in the `@/src/data/handouts/ts` file. Keep in mind that the title and description used there will
be the ones showing up in the individual listing page (domain.pf/handouts/handout-name).
3. Add a listing for the handout in the `@/src/app/page.tsx` for easier discovery. There should be a link pointing to
the individual listing (example above) and a brief description of the value of the handout to the student.