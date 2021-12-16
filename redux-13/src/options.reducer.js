import { TOOGLE_OPTIONS } from "./options.actions";

export const optionsReducer = (state = initState, actions) => {
  switch (actions.type) {
    case TOOGLE_OPTIONS: {
      const { optionsId } = actions.payload;
      const newSelectedIds = state.selected.includes(optionsId)
        ? state.selected.filter((id) => id !== optionsId)
        : state.selected.concat(optionsId);
      return {
        ...state,
        selected: newSelectedIds,
      };
    }
    default:
      return state;
  }
};
const options = [
  {
    id: "id-0",
    name: "19-inch wheels",
  },
  {
    id: "id-1",
    name: "Leather-trimmed Sport Seats",
  },
  {
    id: "id-2",
    name: "B&O Sound System",
  },
  {
    id: "id-3",
    name: "Adaptive Cruise Control",
  },
  {
    id: "id-4",
    name: "Daytime running lights",
  },
  {
    id: "id-5",
    name: "Auto High-Beam Headlamps",
  },
  {
    id: "id-6",
    name: "Carbon Sport Interior",
  },
];

const initState = { optionsList: options, selected: [] };
