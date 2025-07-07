import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/Mock.js";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  restaurants.map((restaurant) => (
    <div className="restaurant" style={{ backgroundColor: "#ffebee" }}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <ul>
        {element.menu.map((menu) => (
          <li>{menu.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {element.reviews.map((review) => (
          <li>{review.text}</li>
        ))}
      </ul>
    </div>
  ))
);