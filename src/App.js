import "./App.css";
import styled, { keyframes } from "styled-components";
import FontLoader from "./Fonts";
import { BannerSection } from "./Banner";
import BrevyLogo from "./img/brevy.png";
import Mo from "./img/mo.png";
import Conder from "./img/conder.png";
import Anika from "./img/anika.png";
import { Votes } from "./Votes";
import { useState } from "react";

FontLoader();

export const InnerContentWidth = 1100;
export const Line = "1px var(--line) solid";
export const FirstColumnWidth = 220;
export const SecondColumnWidth = 300;
export const VoteColumnWidth = 130;
export const FinalColumnWidth =
  "calc(100% - " + FirstColumnWidth + "px - " + SecondColumnWidth + "px)";

function App() {
  const [votes, setVotes] = useState(42);
  return (
    <>
      {BannerSection}
      <FirstRow>
        <FirstRowInner>
          <FirstColumn delay={0}>STARTUP OF THE DAY</FirstColumn>
          <SecondColumn delay={0.2}>
            <a href="https://brevy.com">BREVY.COM</a>
          </SecondColumn>
          <FinalColumn delay={0.5}>
            HATE SCREENSHOTS FOR ENG ISSUES? BREVY IS 4 YOU.
          </FinalColumn>
        </FirstRowInner>
      </FirstRow>
      <SecondRow>
        <SecondRowInner>
          <LogoBox delay={0.1}>
            <Caption>LOGO</Caption>
            <img src={BrevyLogo}></img>
          </LogoBox>
          <FoundersBox delay={0.4}>
            <Caption>FOUNDERS</Caption>
            <Founder>
              <img src={Conder}></img>
              CONDER SHOU
            </Founder>
            <Founder>
              <img src={Anika}></img>
              ANIKA ZAMAN
            </Founder>
            <Founder>
              <img src={Mo}></img>
              MOHAMED ABEDELMALIK
            </Founder>
          </FoundersBox>
          <VoteBox
            delay={0.8}
            onClick={() => {
              setVotes((votes) => votes + 1);
            }}
          >
            <Caption>CLICK TO UPVOTE</Caption>
            <Votes votes={votes}></Votes>
          </VoteBox>
          <FinalContent delay={0.9}>
            <FinalContentHalf>
              <Caption>WHY?</Caption>
              <Content>
                "Can't Repro" is annoying, let's be honest. Screenshots are
                cumbersome and poor evidence. Brevy is sick cause it helps you
                report issues with auto-captured context
              </Content>
            </FinalContentHalf>
            <FinalContentHalf>
              <Caption>RANDOM THOUGHTS</Caption>
              <Content>
                Nightmode homepage? Now that's what we're talking about!
              </Content>
            </FinalContentHalf>
          </FinalContent>
        </SecondRowInner>
      </SecondRow>
      <ArbitraryRow>
        <ArbitraryRowInner>
          <FirstColumn delay={0.3}>STARTUP OF THE WK</FirstColumn>
          <SecondColumn delay={0.7}>
            <a href="https://commandbar.com">COMMANDBAR.COM</a>
          </SecondColumn>
          <VoteColumn delay={1.2}>58 VOTES</VoteColumn>
          <ShortBlurbColumn delay={1.6}>
            SUPERHUMAN IN EVERY APP??? HELL YES.
          </ShortBlurbColumn>
        </ArbitraryRowInner>
      </ArbitraryRow>
      <ArbitraryRow>
        <ArbitraryRowInner>
          <FirstColumn delay={0.6}>STARTUP OF THE MO</FirstColumn>
          <SecondColumn delay={1.1}>
            <a href="https://safebase.co">SAFEBASE.CO</a>
          </SecondColumn>
          <VoteColumn delay={1.5}>72 VOTES</VoteColumn>
          <ShortBlurbColumn delay={1.8}>
            SOFTWARE FOR BRAGGING ‘BOUT SECURITY
          </ShortBlurbColumn>
        </ArbitraryRowInner>
      </ArbitraryRow>
      <ArbitraryRow>
        <ArbitraryRowInner>
          <FirstColumn delay={1.0}>STARTUP OF THE QTR</FirstColumn>
          <SecondColumn delay={1.4}>
            <a href="https://backbone.com">BACKBONE.COM</a>
          </SecondColumn>
          <VoteColumn delay={1.7}>109 VOTES</VoteColumn>
          <ShortBlurbColumn delay={1.95}>
            TURN YOUR IPHONE INTO A SWITCH
          </ShortBlurbColumn>
        </ArbitraryRowInner>
      </ArbitraryRow>
      <ArbitraryRow>
        <ArbitraryRowInner>
          {" "}
          <FirstColumn delay={1.3}>STARTUP OF THE YR</FirstColumn>
          <SecondColumn delay={1.6}>
            <a href="https://lendtable.com">LENDTABLE.COM</a>
          </SecondColumn>
          <VoteColumn delay={1.9}>282 VOTES</VoteColumn>
          <ShortBlurbColumn delay={2.0}>
            FREE MONEY? YOU CAN'T MAKE THIS UP.
          </ShortBlurbColumn>
        </ArbitraryRowInner>
      </ArbitraryRow>
      <ArbitraryRow>
        <ArbitraryRowInner>
          {" "}
          <FullColumn delay={2.2}>
            NOMINATE@STARTOF.COM TO NOMINATE OR SPONSOR. VOTE MANIPULATION = 
            INSTANT COMPANY BAN.
          </FullColumn>
        </ArbitraryRowInner>
      </ArbitraryRow>
    </>
  );
}

const FirstRow = styled.div`
  position: relative;
  width: 100%;
  border-top: ${Line};
  border-bottom: ${Line};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const FirstRowInner = styled.div`
  width: ${InnerContentWidth}px;
  height: 40px;
  border-left: ${Line};
  border-right: ${Line};
  font-size: 12px;
  letter-spacing: 4px;
  box-sizing: border-box;
`;

const contentBoxFadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity: 1;
  }
`;

const gradientBoxFade = keyframes`
  0% {
    opacity:1;
    background-size: 100% 100%;

  }

  100% {
    opacity: 0;
    background-size: 200% 200%;
  }
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  font-family: GilroyQ;
  position: relative;
  opacity: 0;
  animation: ${contentBoxFadeIn} 0.5s 1 forwards;
  animation-delay: ${(props) => props.delay}s;
  b {
    font-family: GilroyB;
  }
  &::before {
    content: " ";
    position: absolute;
    z-index: 5;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      40deg,
      var(--primary-accent),
      var(--tertiary-accent),
      var(--secondary-accent),
      var(--tertiary-accent),
      var(--primary-accent)
    );
    background-size: 200% 200%;
    animation: ${gradientBoxFade} 1s 1 forwards;
    animation-delay: ${(props) => props.delay + 0.5}s;
    pointer-events: none;
  }
`;

const RowBlock = styled(ContentBox)`
  border-right: ${Line};
  height: 40px;
  color: var(--primary);
  float: left;
  align-items: center;
  justify-content: center;
  display: flex;
  border-right: ${Line};
  box-sizing: border-box;
  height: 40px;
  padding-left: 14px;
  padding-right: 14px;
`;

const FullColumn = styled(RowBlock)`
  width: 100%;
  justify-content: left;
  font-family: GilroyB;
  color:black;
`;

const FirstColumn = styled(RowBlock)`
  width: ${FirstColumnWidth}px;
  justify-content: left;
  font-family: GilroyB;
`;

const SecondColumn = styled(RowBlock)`
  width: ${SecondColumnWidth}px;
  justify-content: left;
  a {
    text-decoration: none;
    color: black;
  }
`;

const FinalColumn = styled(RowBlock)`
  width: ${FinalColumnWidth};
  justify-content: left;
  color: black;
  border-right: none;
`;

const SecondRow = styled.div`
  position: relative;
  width: 100%;
  height: ${FirstColumnWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SecondRowInner = styled.div`
  width: ${InnerContentWidth}px;
  height: ${FirstColumnWidth}px;
  border-left: ${Line};
  border-right: ${Line};
  font-size: 12px;
  letter-spacing: 4px;
  box-sizing: border-box;
  border-bottom: ${Line};
`;

const LogoBox = styled(ContentBox)`
  width: ${FirstColumnWidth}px;
  box-sizing: border-box;
  border-right: ${Line};
  height: ${FirstColumnWidth}px;
  float: left;
  position: relative;
  img {
    position: absolute;
    width: ${FirstColumnWidth * 0.4}px;
    top: ${FirstColumnWidth * 0.3}px;
    left: ${FirstColumnWidth * 0.3}px;
  }
`;

const Caption = styled.div`
  width: 100%;
  position: relative;
  height: 40px;
  align-items: center;
  justify-content: left;
  display: flex;
  box-sizing: border-box;
  padding-left: 14px;
  color: var(--primary);
  font-family: GilroyB;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  font-family: GilroyQ;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: normal;
  margin-top: -10px;
`;

const FoundersBox = styled(ContentBox)`
  width: ${SecondColumnWidth}px;
  height: ${FirstColumnWidth}px;
  border-right: ${Line};
  float: left;
`;

const Founder = styled.div`
  height: 40px;
  width: 100%;
  padding-left: 14px;
  display: flex;
  align-items: center;
  img {
    float: left;
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;

const VoteBox = styled(ContentBox)`
  width: ${FirstColumnWidth}px;
  box-sizing: border-box;
  border-right: ${Line};
  height: ${FirstColumnWidth}px;
  float: left;
  position: relative;
  cursor: pointer;
`;

const FinalContent = styled(ContentBox)`
  width: ${InnerContentWidth -
  FirstColumnWidth -
  FirstColumnWidth -
  3.5 -
  SecondColumnWidth}px;
  height: ${FirstColumnWidth}px;
  justify-content: left;
  color: black;
  border-right: none;
  float: left;
`;

const FinalContentHalf = styled(ContentBox)`
  float: left;
  width: 100%;
  height: ${FirstColumnWidth / 2}px;
  & + & {
    border-top: ${Line};
  }
`;

const ArbitraryRow = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const ArbitraryRowInner = styled.div`
  width: ${InnerContentWidth}px;
  height: 40px;
  border-left: ${Line};
  border-right: ${Line};
  border-bottom: ${Line};
  font-size: 12px;
  letter-spacing: 4px;
  box-sizing: border-box;
`;

const VoteColumn = styled(RowBlock)`
  width: ${VoteColumnWidth}px;
  justify-content: left;
  color: var(--secondary);
  font-weight: 600;
  font-family: GilroyB;
`;

const ShortBlurbColumn = styled(RowBlock)`
  width: ${InnerContentWidth -
  FirstColumnWidth -
  SecondColumnWidth -
  8.5 -
  VoteColumnWidth}px;
  justify-content: left;
  color: black;
  border: none;
  float: left;
`;

export default App;
