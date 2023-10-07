export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	head: string;
	torso: string;
	feet: string;
};

export enum BackgroundAct {
	'CHANGHEAD' = 'CHANGEHEAD',
	'CHANGETORSO' = 'CHANGETORSO',
	'CHANGEFEET' = 'CHANGEFEET'
}

export interface ChangeHead {
	action: BackgroundAct.CHANGHEAD;
	payload: "";
}

export interface ChangeTorso {
	action: BackgroundAct.CHANGETORSO;
	payload: "white";
}

export interface ChangeFeet {
	action: BackgroundAct.CHANGEFEET;
	payload: "white";
}

export type Actions = ChangeHead | ChangeTorso | ChangeFeet;