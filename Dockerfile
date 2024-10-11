# Use an official Node.js runtime as the parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json from the src directory
COPY src/package*.json ./

# Install the project dependencies
RUN npm install --production

# Copy the rest of the application code from the src directory
COPY src/ .

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
