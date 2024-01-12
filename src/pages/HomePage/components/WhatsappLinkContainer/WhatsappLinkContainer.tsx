import styled from "styled-components";
import { companyData } from "../../../../companyData/companyData";
import WhatsappIcon from "../../../../assets/whatsapp-icon.svg";
import { Centralizer } from "../../../../componentsStyled/Centralizer";
import { PageSubtitle } from "../../../../components";

const Container = styled.div`
  h4 {
    color: #fff;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.42px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const LinkElement = styled.a`
  display: flex;
  width: 100%;
  max-width: 284.506px;
  > button {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: 5px;
    padding: 14px 20px;
    margin: 0;
    border: none;
    background: #9bcb8e;
    color: white;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      scale: 1.05;
    }
  }
`;

export const WhatsappLinkContainer = () => {
  return (
    <Centralizer>
      <Container>
        <PageSubtitle>Clique nos botões</PageSubtitle>
        <LinksContainer>
          {companyData.whatsappLins.map(({ text, url }, index) => {
            return (
              <LinkElement
                href={url}
                target="_blank"
                key={index + "-" + text}
              >
                <button>
                  <img src={WhatsappIcon} alt="whatsapp-icon" />
                  {text}
                </button>
              </LinkElement>
            );
          })}
        </LinksContainer>
      </Container>
    </Centralizer>
  );
};
