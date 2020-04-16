import { connect, ConnectedProps } from 'react-redux';
import { ColorResult } from 'react-color';

interface RootState {
  selected: string | null | undefined;
  headerBGColor: ColorResult;
  emphasisColor: ColorResult;
  emphasisComplimentColor: ColorResult;
  logoColor: ColorResult;
  bgColor: ColorResult;
  hxColor: ColorResult;
  textColor: ColorResult;
  logoText: string;
  heroText: string;
  bodyText: string;
  logoFont: string;
  hxFont: string;
  textFont: string;
}

const mapState = (state: RootState) => ({
  selected: state.selected,
  headerBGColor: state.headerBGColor,
  emphasisColor: state.emphasisColor,
  emphasisComplimentColor: state.emphasisComplimentColor,
  logoColor: state.logoColor,
  bgColor: state.bgColor,
  hxColor: state.hxColor,
  textColor: state.textColor,
  logoText: state.logoText,
  heroText: state.heroText,
  bodyText: state.bodyText,
  logoFont: state.logoFont,
  hxFont: state.hxFont,
  textFont: state.textFont
});

const mapDispatch = {
  changeSelected: (selected: string | undefined | null) => ({ type: 'CHANGE_SELECTED', payload: selected }),
  changeHeaderBGColor: (color: ColorResult) => ({ type: 'CHANGE_HEADER_BG_COLOR', payload: color }),
  changeEmphasisColor: (color: ColorResult) => ({ type: 'CHANGE_EMPHASIS_COLOR', payload: color }),
  changeEmphasisComplimentColor: (color: ColorResult) => ({
    type: 'CHANGE_EMPHASIS_COMPLIMENT_COLOR',
    payload: color
  }),
  changeBGColor: (color: ColorResult) => ({
    type: 'CHANGE_BG_COLOR',
    payload: color
  }),
  changeLogoColor: (color: ColorResult) => ({
    type: 'CHANGE_LOGO_COLOR',
    payload: color
  }),
  changeHxColor: (color: ColorResult) => ({
    type: 'CHANGE_HX_COLOR',
    payload: color
  }),
  changeTextColor: (color: ColorResult) => ({
    type: 'CHANGE_TEXT_COLOR',
    payload: color
  }),
  changeLogoText: (str: string) => ({
    type: 'CHANGE_LOGO_TEXT',
    payload: str
  }),
  changeHeroText: (str: string) => ({
    type: 'CHANGE_HERO_TEXT',
    payload: str
  }),
  changeBodyText: (str: string) => ({
    type: 'CHANGE_BODY_TEXT',
    payload: str
  }),
  changeLogoFont: (fnt: string) => ({
    type: 'CHANGE_LOGO_FONT',
    payload: fnt
  }),
  changeHxFont: (fnt: string) => ({
    type: 'CHANGE_HX_FONT',
    payload: fnt
  }),
  changeTextFont: (fnt: string) => ({
    type: 'CHANGE_TEXT_FONT',
    payload: fnt
  })
};

export const connector = connect(
  mapState,
  mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux & {};
