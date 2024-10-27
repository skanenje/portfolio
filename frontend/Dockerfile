# Build stage
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install react-icons explicitly
RUN npm install react-icons

# Copy source code
COPY . .

# List contents of the directory
RUN ls -la

# Display Node.js and npm versions
RUN node -v && npm -v

# Display package.json content
RUN cat package.json

# Build the application with verbose output
RUN npm run build --verbose

# Final stage
FROM nginx:alpine AS production-stage

# Copy built assets from builder stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]