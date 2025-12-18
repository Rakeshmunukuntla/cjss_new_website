# # First stage: Build the application
# FROM node:22 AS build
 
# # Set the working directory
# WORKDIR /app
 
# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./
# RUN npm install
 
# # Copy the rest of the project
# COPY . .
# RUN npm run dev
 
# # Second stage: Use NGINX to serve the build files
# FROM nginx:alpine
 
# # Copy build output to NGINX html folder
# COPY --from=build /app/dist /usr/share/nginx/html
 
# # Expose custom port
# EXPOSE 80
 
# # Start NGINX
# CMD ["nginx", "-g", "daemon off;"]




# =========================
# Stage 1: Build
# =========================
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Vite app
RUN npm run build

# =========================
# Stage 2: Serve with NGINX
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
