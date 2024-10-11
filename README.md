
# AI Vacation Planner Backend

This backend service acts as a proxy to an AI service, requesting itinerary suggestions from the LLM backend by Groq. It is designed to be consumed by an Android app.

## Features

- Acts as a proxy for the Groq AI service.
- Handles requests for generating itinerary suggestions based on input from the Android app.
- Simple to run and deploy.

## Requirements

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn**
- **Groq API Key** (for accessing the LLM backend)

## Setup and Installation

Follow these steps to set up and run the backend service locally:

1. **Clone the Repository:**

   \`\`\`bash
   git clone https://github.com/your-repository/ai-vacation-planner-node-backend.git
   cd ai-vacation-planner-node-backend
   \`\`\`

2. **Install Dependencies:**

   Run the following command to install all required dependencies:

   \`\`\`bash
   npm install
   \`\`\`

   Or, if you're using \`yarn\`:

   \`\`\`bash
   yarn install
   \`\`\`


4. **Running the Service:**

   Once everything is set up, you can run the backend with:

   \`\`\`bash
   npm start
   \`\`\`

   Or, with \`yarn\`:

   \`\`\`bash
   yarn start
   \`\`\`

   This will start the service on \`http://localhost:8080\` (or another port, depending on your configuration).

## Usage

Once the backend is running, it will act as a proxy for the Android app to generate itineraries. The Android app will send requests to this service, which in turn forwards them to the Groq LLM backend to fetch AI-generated suggestions.

### Example Request

You can test the backend by making a \`POST\` request to it. Here's an example using \`curl\`:

\`\`\`bash
curl -X POST http://localhost:8080/api/v1/itinerary -H "Content-Type: application/json" -d '{
    "destination": "New York",
    "duration": 3
}'
\`\`\`

This will trigger the backend to request itinerary suggestions from the Groq service based on the location and duration provided.

## Android App Integration

This service is accessed by an Android app, which sends requests to generate AI-powered itineraries. Ensure the Android app is configured to point to the correct URL where this backend is running (either locally or deployed).

## Deployment

You can deploy this service to platforms like Heroku, Render, or any cloud provider of your choice. Ensure to configure your environment variables correctly on the platform you're using.
