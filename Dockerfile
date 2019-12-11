# base image
FROM node:12

# Add Maintainer Info
LABEL maintainer="Thomas Pickett <test@gmail.com>"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .
RUN npm install

# Expose port 8080 to the outside world
EXPOSE 8080

# start app
CMD ["npm", "run", "start"]