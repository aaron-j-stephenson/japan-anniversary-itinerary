import { createRoot } from "react-dom/client";
import JapanItinerary from "./JapanItinerary.jsx";
import RestaurantGuide from "./RestaurantGuide.jsx";
import { startAutoUpdate } from "./travelState.js";

startAutoUpdate();

const isRestaurants = new URLSearchParams(window.location.search).get("view") === "restaurants";
createRoot(document.getElementById("root")).render(isRestaurants ? <RestaurantGuide /> : <JapanItinerary />);
