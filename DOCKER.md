# Docker
For the best experience with this project, you will want to download [Docker](https://www.docker.com) and have it installed and configured on your development machine.

You will need to provide your own credentials and other secrets. Please see `sample.docker-compose.dev.secrets.yml` for the values you need to supply, and then save this file as `docker-compose.dev.secrets.yml`.

Once you have done that, you can spin up the project by running:

    $ npm run docker:up

To verify the server is running, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the application is running.

Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

For convenience, I have added two helper scripts which will spin down your existing Docker setup for this project and either spin it back up as is - `npm run docker:refresh` -  **OR** build the entire Docker infrastructure from scratch - `npm run docker:refresh:clean`.

PRO TIP: Unsure when to use the `:clean` scripts or not? Think of `docker:refresh:clean` as being your way to indicate you have made changes to a `Dockerfile` or a `docker-compose` file. If you're only changing application code - and not infrastructure code - then you should not have to worry about using `:clean`

## BONUS: Docker scripts
I've included additional scripts that have been useful when working with Docker in previous projects.

You can run these with:

    $ npm run <script>

+ docker:nuke
    - This is the nuclear weapon. This command will delete **ALL** of your containers and images GLOBALLY.

    **If you are using Docker with other projects on your machine, this command will nuke those, too!**
