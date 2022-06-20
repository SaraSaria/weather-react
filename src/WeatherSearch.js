import React from "react";

export default function WeatherSearch() {
  return (
    <form>
      <input type="search" placeholder="Enter a city..." />
      <button type="submit">Search</button>
    </form>
  );
}
