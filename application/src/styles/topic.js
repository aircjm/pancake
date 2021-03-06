import styled from "styled-components";

export const TopicWrapper = styled.main`
    padding-top: 50px;
    padding-bottom: 50px;
    margin: auto;
    max-width: ${props => props.isDesktop ? '1200px' : '100vw'};
    div.tool-bar{
      display: none;
    }
`;

export const Loading = styled.div`
         height: 400px;
         align-self: center;
         display: flex;
         align-items: center;
         justify-content: center;
`;

export const Content = styled.div`
         a.title{
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
         }
         span.date{
              line-height: 17px;
              font-size: 12px;
              color: #999;
         }
         padding:16px 0 16px 16px;

`;