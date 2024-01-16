import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Arial", sans-serif;
`;

const NotFoundHeading = styled.h1`
  font-size: 2em;
  color: #333;
`;

const NotFoundMessage = styled.p`
  font-size: 1.2em;
  color: #666;
`;

export const PageNotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Página não encontrada</NotFoundHeading>
      <NotFoundMessage>
        A página que você está procurando pode ter sido removida ou não está
        disponível temporariamente.
      </NotFoundMessage>
    </NotFoundContainer>
  );
};
