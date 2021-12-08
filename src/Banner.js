import styled, { keyframes } from "styled-components";

const Message = (
  <>
    <span>STARTUP OF THE WEEK</span>
    <span>STARTUP OF THE MONTH</span>
    <span>STARTUP OF THE DAY</span>
    <span>STARTUP OF THE QUARTER</span>
    <span>STARTUP OF THE YEAR</span>
  </>
);

const RepeatedMessage = (
  <>
    {" "}
    {Message}
    {Message}
    {Message}
    {Message}
    {Message}
    {Message}
    {Message}
    {Message}
    {Message}
  </>
);

const BannerKeyframes = keyframes`
  from {
    margin-left: 0vw;
  }

  to {
    margin-left: -200vw;
  }
`;

const BannerKeyframesR = keyframes`
  from {
    margin-left: -200vw;
  }

  to {
    margin-left: 0vw;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  padding-top: 6.25px;
  padding-bottom: 6.25px;
  font-weight: 900;
  position: relative;
  div {
    width: 400%;
    height: 25px;
    display: flex;
    align-items: center;
    letter-spacing: 4px;
    position: relative;
    b {
      position: absolute;
      top: 0px;
      left: 0px;
      animation: ${BannerKeyframes} 60s linear infinite alternate;
      width: 1000%;
    }

    b span {
      margin: 0px 5px;
      font-size: 12px;
      background: linear-gradient(
        to left,
        var(--primary-accent),
        var(--tertiary-accent),
        var(--secondary-accent),
        var(--tertiary-accent),
        var(--primary-accent)
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  div + div {
    b {
      animation: ${BannerKeyframesR} 60s linear infinite alternate;
    }
  }

  div + div + div {
    b {
      animation: ${BannerKeyframes} 80s linear infinite alternate;
    }
  }

  div + div + div + div {
    b {
      animation: ${BannerKeyframesR} 80s linear infinite alternate;
    }
  }
`;
export const BannerSection = (
  <Banner>
    <div>
      <b>{RepeatedMessage}</b>
    </div>
    <div style={{ marginLeft: -50 }}>
      <b>{RepeatedMessage}</b>
    </div>
    <div style={{ marginLeft: -80 }}>
      <b>{RepeatedMessage}</b>
    </div>
    <div>
      <b>{RepeatedMessage}</b>
    </div>
  </Banner>
);
