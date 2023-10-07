import { AppState } from "../Types/store";
import { Actions,BackgroundAct } from "../Types/store";


export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case BackgroundAct.CHANGHEAD:
		  return {
			...currentState,
			head: payload,
		  };

		  case BackgroundAct.CHANGETORSO:
		  return {
			...currentState,
			torso: payload,
		  };

		  case BackgroundAct.CHANGEFEET:
		  return {
			...currentState,
			feet: payload,
		  };
		default:
		  return currentState;
	  }

};