import { RouteLocationNormalized } from "vue-router";
import { router } from "../router";

const useRouteInfo = (): RouteLocationNormalized => {
  const { currentRoute } = router;
  return currentRoute.value;
};

export default useRouteInfo;
