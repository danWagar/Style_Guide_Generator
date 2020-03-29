//Reducers
export interface VisualizerState {
  headerBGColor: string;
}

//Actions
export const CHANGE_HEADER_BG_COLOR = 'CHANGE_HEADER_BG_COLOR';
interface ChangeHeaderBGColorAction {
  type: typeof CHANGE_HEADER_BG_COLOR;
  payload: string;
}

export type VisualizerActionTypes = ChangeHeaderBGColorAction;

//
