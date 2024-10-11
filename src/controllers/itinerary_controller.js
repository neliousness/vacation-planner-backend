import {
  HTTP_STATUS_CODE_BAD_REQUEST,
  HTTP_STATUS_CODE_SUCCESS,
} from "../constants/constants.js";
import { HttpError } from "../models/http_error.js";

export const createVacationItinerary = async (request) => {
  const vacationDestination = request.payload?.destination;
  const vacationDuration = request.payload?.duration;
  if (!vacationDestination && !vacationDuration) {
    throw HttpError(
      "Missing required field: destination or duration",
      HTTP_STATUS_CODE_BAD_REQUEST
    );
  }
  const itineraries = await request.server.app.llm.generateVacationItinerary(
    vacationDestination, vacationDuration
  );
  request.log("info", itineraries);

  return {
    statusCode: HTTP_STATUS_CODE_SUCCESS,
    itineraries,
  };
};

export const getPopularLocations = async (request) => {
  const payload = request.payload;
  if (!payload) {
    throw HttpError(
      "Missing required field: isAffordable",
      HTTP_STATUS_CODE_BAD_REQUEST
    );
  }
  const popularDestinations = await request.server.app.llm.generatePopularDestinations(payload?.isAffordable);
  request.log("info", popularDestinations);

  return {
    statusCode: HTTP_STATUS_CODE_SUCCESS,
    popularDestinations,
  };
};

