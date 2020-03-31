//Reducers
export interface VisualizerState {
  selected?: string | null | undefined;
  headerBGColor?: string;
  emphasisColor?: string;
  emphasisComplimentColor?: string;
}

//Actions
export const CHANGE_SELECTED = 'CHANGE_SELECTED';
interface ChangeSelected {
  type: typeof CHANGE_SELECTED;
  payload: string | undefined | null;
}

export const CHANGE_HEADER_BG_COLOR = 'CHANGE_HEADER_BG_COLOR';
interface ChangeHeaderBGColorAction {
  type: typeof CHANGE_HEADER_BG_COLOR;
  payload: string;
}

export const CHANGE_EMPHASIS_COLOR = 'CHANGE_EMPHASIS_COLOR';
interface ChangeEmphasisColorAction {
  type: typeof CHANGE_EMPHASIS_COLOR;
  payload: string;
}

export const CHANGE_EMPHASIS_COMPLIMENT_COLOR = 'CHANGE_EMPHASIS_COMPLIMENT_COLOR';
interface ChangeEmphasisComplimentColorAction {
  type: typeof CHANGE_EMPHASIS_COMPLIMENT_COLOR;
  payload: string;
}

export type VisualizerActionTypes =
  | ChangeSelected
  | ChangeHeaderBGColorAction
  | ChangeEmphasisColorAction
  | ChangeEmphasisComplimentColorAction;

//
