import { itineraryHandler, popularDestinationHandler } from "./itinerary.js";

const noAuth = false;
export const itineraryRoutes = [
  {
    method: "POST",
    path: "/api/v1/itinerary",
    handler: itineraryHandler,
    options: {
      auth: noAuth,
    },
  },
  {
    method: "POST",
    path: "/api/v1/destinations",
    handler: popularDestinationHandler,
    options: {
      auth: noAuth,
    },
  },
];
