import styled from 'styled-components';

const HtmlImage = 'assets/html.png';
const CssImage = 'assets/css.png';
const JsImage = 'assets/JS.png';
const ImageTop = 'assets/image-top.png';

export const Container = styled.div`
  flex: 1;
  /* background-image: url(${HtmlImage}), url(${CssImage}), url(${JsImage}),
    url(${ImageTop});
  background-position: left top, right top, center bottom, center center;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  margin: 50px; */
  position: relative;

  .htmlPresentation {
    position: absolute;
    top: 0;
    right: 480px;
  }
  .cssPresentation {
    position: absolute;
    top: 20px;
    right: 30px;
  }
  .panelPresentation {
    position: absolute;
    top: calc(50% - 180px);
    right: 80px;
  }
  .jsPresentation {
    position: absolute;
    bottom: 10px;
    right: 230px;
  }

  @media (max-width: 980px) {
    .htmlPresentation {
      right: 300px;
    }
    .panelPresentation {
      right: 0px;
    }
    .jsPresentation {
      right: 150px;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & > * {
      margin: 15px;
      margin-top: 5px;
    }
    .panelPresentation {
      display: none;
    }
    .htmlPresentation {
      position: static;
      width: 70px;
      height: 70px;
    }
    .cssPresentation {
      position: static;
      width: 70px;
      height: 70px;
    }
    .jsPresentation {
      position: static;
      width: 70px;
      height: 70px;
    }
  }
`;
