import { BackgroundAct } from '../Types/store';

export const changeHead = (payload: any) => {
	return {
		action: BackgroundAct.CHANGHEAD,
		payload,
	};
};

export const changeTorso = (payload: any) => {
	return {
		action: BackgroundAct.CHANGETORSO,
		payload,
	};
};

export const changeFeet = (payload: any) => {
	return {
		action: BackgroundAct.CHANGEFEET,
		payload,
	};
};