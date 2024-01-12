import styled from "styled-components";
import Logo from "../../assets/logo_ecommerce.png";
import { Centralizer } from "../../componentsStyled/Centralizer";
import {
  LocationContainer,
  WhatsappLinkContainer,
  OtherLinksContainer,
} from "./components";

const PageContainer = styled.main`
  background: #2d443c;
  padding: 26px 0px 73px;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const HomePage = () => {
  return (
    <PageContainer>
      <Centralizer>
        <img src={Logo} alt="farma-debora-logo" />
      </Centralizer>
      <Container>
        <WhatsappLinkContainer />
        <OtherLinksContainer />
        <LocationContainer />
      </Container>
    </PageContainer>
  );
};
