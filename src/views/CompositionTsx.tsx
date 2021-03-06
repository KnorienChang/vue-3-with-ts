import { ref, RendererElement } from "vue";
import useRouteInfo from "@/hooks/useRouteInfo";
import { RouteLocation } from "vue-router";

export default {
  name: "Composition Tsx",
  setup(): RendererElement {
    const radioChecked = ref<string>("o1");
    const handleBtn = (): void => {
      radioChecked.value = radioChecked.value === "o1" ? "o2" : "o1";
    };
    const handleIpt = ({ target }: { target: EventTarget | null }): void => {
      const { id } = target as HTMLInputElement;
      radioChecked.value = id;
    };
    return (): JSX.Element => {
      const routeInfo: RouteLocation = useRouteInfo();
      return (
        <div class="page-container">
          <button onClick={handleBtn}>
            切换选中 | 当前 {radioChecked.value}
          </button>
          <br />
          <div class="radio-section">
            <label for="o1">
              <input
                type="radio"
                name="o1"
                id="o1"
                checked={radioChecked.value === "o1"}
                onInput={handleIpt}
              />
              o1
            </label>
            <label for="o2">
              <input
                type="radio"
                name="o2"
                id="o2"
                checked={radioChecked.value === "o2"}
                onInput={handleIpt}
              />
              o2
            </label>
          </div>
          <p>route name: {routeInfo.name}</p>
        </div>
      );
    };
  },
};
