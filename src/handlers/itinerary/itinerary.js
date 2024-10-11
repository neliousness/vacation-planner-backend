import {
  HTTP_ERROR_MESSAGE,
  HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR,
} from "../../constants/constants.js";
import { createVacationItinerary, getPopularLocations } from "../../controllers/itinerary_controller.js";

export const itineraryHandler = async (request, h) => {
  let response;

  try {
    const result = await createVacationItinerary(request);
    response = h
      .response({
        items: result.itineraries,
      })
      .code(result.statusCode);
  } catch (err) {
    return h
      .response({ message: HTTP_ERROR_MESSAGE })
      .code(HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR);
  }

  return response;
};


export const popularDestinationHandler = async (request, h) => {
  let response;

  try {
    const result = await getPopularLocations(request);
    response = h
      .response({
        items: result.popularDestinations,
      })
      .code(result.statusCode);
  } catch (err) {
    console.error(err)
    return h
      .response({ message: HTTP_ERROR_MESSAGE })
      .code(HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR);
  }

  return response;
};