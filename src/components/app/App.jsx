import { restaurants } from "../../../materials/Mock.js";
import { Layout } from "../layout/Layout.jsx";
import { RestaurantsPage } from "../restaurants/RestaurantsPage.jsx";
export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} />
    </Layout>
  );
};
