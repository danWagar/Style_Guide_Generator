import { connect, ConnectedProps } from 'react-redux';

interface RootState {
  headerBGColor: string;
  emphasisColor: string;
  emphasisComplimentColor: string;
}

const mapState = (state: RootState) => ({
  headerBGColor: state.headerBGColor,
  emphasisColor: state.emphasisColor,
  emphasisComplimentColor: state.emphasisComplimentColor
});

const mapDispatch = {
  changeHeaderBGColor: () => ({ type: 'CHANGE_HEADER_BG_COLOR' }),
  changeEmphasisColor: () => ({ type: 'CHANGE_EMPHASIS_COLOR' }),
  changeEmphasisComplimentColor: () => ({ type: 'CHANGE_EMPHASIS_COMPLIMENT_COLOR' })
};

export const connector = connect(
  mapState,
  mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux & {};
