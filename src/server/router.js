import { itineraryRoutes } from "../handlers/itinerary/routes.js";

export async function loadRoutes(server) {
  server.route(itineraryRoutes);
}
