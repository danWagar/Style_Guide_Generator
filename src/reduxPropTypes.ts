import { connect, ConnectedProps } from 'react-redux';

interface RootState {
  selected: string | null | undefined;
  headerBGColor: string;
  emphasisColor: string;
  emphasisComplimentColor: string;
  bgColor: string;
  hxColor: string;
  textColor: string;
}

const mapState = (state: RootState) => ({
  selected: state.selected,
  headerBGColor: state.headerBGColor,
  emphasisColor: state.emphasisColor,
  emphasisComplimentColor: state.emphasisComplimentColor,
  bgColor: state.bgColor,
  hxColor: state.hxColor,
  textColor: state.textColor
});

const mapDispatch = {
  changeSelected: (selected: string | undefined | null) => ({ type: 'CHANGE_SELECTED', payload: selected }),
  changeHeaderBGColor: (color: string) => ({ type: 'CHANGE_HEADER_BG_COLOR', payload: color }),
  changeEmphasisColor: (color: string) => ({ type: 'CHANGE_EMPHASIS_COLOR', payload: color }),
  changeEmphasisComplimentColor: (color: string) => ({
    type: 'CHANGE_EMPHASIS_COMPLIMENT_COLOR',
    payload: color
  }),
  changeBGColor: (color: string) => ({
    type: 'CHANGE_BG_COLOR',
    payload: color
  }),
  changeHxColor: (color: string) => ({
    type: 'CHANGE_HX_COLOR',
    payload: color
  }),
  changeTextColor: (color: string) => ({
    type: 'CHANGE_TEXT_COLOR',
    payload: color
  })
};

export const connector = connect(
  mapState,
  mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux & {};
