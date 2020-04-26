import React, { useState, useRef, useEffect } from 'react';
import { Props, connector } from '../../reduxInterface';
import Input from '../Input/Input';
import { useStyles } from '../../useStyles';
import './LandingPage.css';

const LandingPage: React.FC<Props> = props => {
  const { selected, heroText, bodyText } = props;
  const [editHeroText, setEditHeroText] = useState(false);
  const [editBodyText, setEditBodyText] = useState(false);
  const [bodyTextHeight, setBodyTextHeight] = useState<number | undefined>(0);
  const ref = useRef<HTMLParagraphElement | null>(null) as React.MutableRefObject<HTMLParagraphElement>;

  const styles = useStyles();

  useEffect(() => {
    if (!ref.current) return;
    console.log(ref.current.clientHeight);
    setBodyTextHeight(ref.current.clientHeight + 8);
  });

  const toggleEditHeroText = () => {
    setEditHeroText(!editHeroText);
  };

  const handleHeroTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editHeroText) return;
    toggleEditHeroText();
  };

  const toggleEditBodyText = () => {
    setEditBodyText(!editBodyText);
  };

  const handleBodyTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editBodyText) return;
    toggleEditBodyText();
  };
  return (
    <main className="LandingPage" style={styles.mainStyle}>
      <div className="LandingPage_container">
        <div onClick={handleHeroTextClick}>
          {!editHeroText ? (
            <h1
              className="LandingPage_hero_text"
              style={{ ...styles.hxStyle, ...(selected === 'Hx' && { ...styles.selectedOutline }) }}
            >
              {heroText}
            </h1>
          ) : (
            <Input
              parentStateCallback={toggleEditHeroText}
              toChange="Hero"
              defaultValue={heroText}
              style={styles.hxStyle}
              className="LandingPage_hero_text"
            />
          )}
        </div>
        <div className="LandingPage_body_text_container" onClick={handleBodyTextClick}>
          {!editBodyText ? (
            <p
              ref={ref}
              style={{ ...styles.textStyle, ...(selected === 'Text' && { ...styles.selectedOutline }) }}
            >
              {bodyText}
            </p>
          ) : (
            <Input
              parentStateCallback={toggleEditBodyText}
              toChange="Body"
              defaultValue={bodyText}
              style={styles.textStyle}
              className="LandingPage_body_text_container"
              textField={true}
              height={bodyTextHeight}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default connector(LandingPage);
