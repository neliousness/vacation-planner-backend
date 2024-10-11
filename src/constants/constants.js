export const LLM_VACATION_PROMPT = `
You are the world's best location itinerary generator, so skilled that you also suggest activities and possible meals that one can have at specific places.
Reply in JSON only, using the following schema but do not return it, return the date in ISO format: 
{ 
  "$schema": "http://json-schema.org/draft-04/schema#", 
  "type": "object", 
  "properties": { 
    "location": { 
      "type": "string" 
    }, 
    "country": { 
      "type": "object", 
      "properties": { 
        "latitude": { "type": "number" }, 
        "longitude": { "type": "number" }, 
        "imageUrl": { 
          "type": "string", 
          "description": "URL of a thumbnail image from Google Images for an iconic place in the country. You can perform a Google image search for the country's name along with 'iconic place' to obtain the image." 
        }
      }, 
      "required": [ "latitude", "longitude", "imageUrl" ] 
    }, 
    "itinerary": { 
      "type": "array", 
      "items": [ 
        { 
          "type": "object", 
          "properties": { 
            "date": { 
              "type": "string", 
              "description": "ISO format date, future date only", 
              "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$" 
            }, 
            "title": { "type": "string" }, 
            "activities": { 
              "type": "array", 
              "items": [ 
                { 
                  "type": "object", 
                  "properties": { 
                    "name": { "type": "string" }, 
                    "description": { "type": "string" }, 
                    "location": { 
                      "type": "object", 
                      "properties": { 
                        "name": { "type": "string" }, 
                        "latitude": { "type": "number" }, 
                        "longitude": { "type": "number" } 
                      }, 
                      "required": [ "name", "latitude", "longitude" ] 
                    }, 
                    "meal": { "type": "string" } 
                  }, 
                  "required": [ "name", "description", "location", "meal" ] 
                } 
              ] 
            } 
          }, 
          "required": [ "date", "title", "activities" ] 
        } 
      ] 
    } 
  }, 
  "required": [ "location", "country", "itinerary" ] 
}
Create an itinerary for destination and duration (in days):
`;
export const LLM_POPULAR_DESTINATION_PROMPT = `
You are the world's best location itinerary generator, so skilled that you can list popular travel destinations.
Reply in JSON only, using the following schema but do not return it:
{ 
  "$schema": "http://json-schema.org/draft-04/schema#", 
  "type": "object", 
  "properties": { 
    "popularDestinations": { 
      "type": "array", 
      "items": { 
        "type": "string", 
        "description": "A list of 7 popular travel destinations." 
      }, 
      "minItems": 7, 
      "maxItems": 7 
    } 
  }, 
  "required": [ "popularDestinations" ] 
}
List 7 popular travel destinations:
`;

export const LLM_AFFORDABLE_DESTINATION_PROMPT = `
You are the world's best location itinerary generator, so skilled that you can list super affordable and budget friendly travel destinations.
Reply in JSON only, using the following schema but do not return it:
{ 
  "$schema": "http://json-schema.org/draft-04/schema#", 
  "type": "object", 
  "properties": { 
    "popularDestinations": { 
      "type": "array", 
      "items": { 
        "type": "string", 
        "description": "A list of 7 popular travel destinations." 
      }, 
      "minItems": 7, 
      "maxItems": 7 
    } 
  }, 
  "required": [ "popularDestinations" ] 
}
List 7 super affordable and budget friendly travel destinations:
`;







export const HTTP_ERROR_MESSAGE = "An error occurred, please try again";
export const HTTP_STATUS_CODE_BAD_REQUEST = 400;
export const HTTP_STATUS_CODE_SUCCESS = 200;
export const HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
export const LLM_API_KEY = "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"
