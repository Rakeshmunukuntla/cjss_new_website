# First stage: Build the application
FROM node:22 AS build
 
# Set the working directory
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
RUN npm install
 
# Copy the rest of the project
COPY . .
RUN npm run build
 
# Second stage: Use NGINX to serve the build files
FROM nginx:alpine
 
# Copy build output to NGINX html folder
COPY --from=build /app/dist /usr/share/nginx/html
 
# Expose custom port
EXPOSE 80
 
# Start NGINX
CMD ["nginx", "-g", "daemon off;"]