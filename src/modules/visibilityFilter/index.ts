import {
  FilterType,
  showAll,
  setVisibilityFilter,
  SetVisibilityFilterAction
} from "./setVisibilityFilter";
export {
  FilterType,
  showAll,
  showCompleted,
  showActive
} from "./setVisibilityFilter";

type Actions = SetVisibilityFilterAction;

export interface State {
  visibility: FilterType;
}

const init = (): State => {
  return {
    visibility: showAll()
  };
};

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return {
        visibility: action.payload.filter
      };
    default:
      return state;
  }
};

export const actionCreator = {
  setVisibilityFilter
};
