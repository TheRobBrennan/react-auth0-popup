FROM mhart/alpine-node:10

# Add the bash shell for convenience; not necessary for production or deployment at all
RUN apk add --update bash && rm -rf /var/cache/apk/*

# Create the app directory
WORKDIR /usr/src

# ----------------------------------------------------------------------
# By default, Docker containers run as root. This is an anti-pattern, so
# let's create a new user to run our service.
#
# REFERENCE:
# https://medium.com/@mccode/processes-in-containers-should-not-run-as-root-2feae3f0df3b
# https://github.com/mhart/alpine-node/issues/48#issuecomment-370171836
RUN addgroup -g 1000 -S appuser && \
    adduser -u 1000 -S appuser -G appuser
RUN chown -R appuser:appuser /usr/src
RUN chmod 755 /usr/src
USER appuser
# ----------------------------------------------------------------------

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy public
COPY public/ ./public/

# Copy source files
COPY src/ ./src/

# Expose our web application port(s)
EXPOSE 3000

# Start our application
CMD ["npx", "react-scripts", "start"]
