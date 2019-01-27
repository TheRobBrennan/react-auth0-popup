# Overview
I would like to take this example a step further and deploy both the server and the client side code to [Zeit Now](https://zeit.co/now).

Branch `zeit-now` will be where this work occurs.

Specific features and enhancements include:
+ Optional [Docker](https://www.docker.com) setup to develop locally and deploy the application to production

## Features
### Docker
As of this writing, you do not have to download or use Docker to run this project. However, if you have [Docker](https://www.docker.com) installed and configured on your development machine, you can spin up the project by running:

    $ npm run docker:up

TIP: If you want to explicitly force a clean build of the Docker images and containers for this project, you can run:

    $ npm run docker:up:clean

To verify the server is running, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the application is running.

Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

For convenience, I have added two helper scripts which will spin down your existing Docker setup for this project and either spin it back up as is - `npm run docker:refresh` -  **OR** build the entire Docker infrastructure from scratch - `npm run docker:refresh:clean`

#### BONUS: Docker scripts
I've included additional scripts that have been useful when working with Docker in previous projects.

You can run these with:

    $ npm run <script>

+ docker:nuke
    - This is the nuclear weapon. This command will delete **ALL** of your containers and images GLOBALLY.

    **If you are using Docker with other projects on your machine, this command will nuke those, too!**
