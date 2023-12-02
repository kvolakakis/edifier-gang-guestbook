# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app
# Add the source code to app
COPY . /app

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
RUN mv /usr/share/nginx/html/index.html /usr/share/nginx/html/index.html.old
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
