import styled from "styled-components";
import { Centralizer } from "../../../../componentsStyled";
import { PageSubtitle } from "../../../../components";
import TablerHandClickIcon from "../../../../assets/tabler_hand-click.svg";
import { companyData } from "../../../../companyData/companyData";
import PillIcon from "../../../../assets/pill-icon.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 284.506px;
  gap: 45px;
  box-sizing: border-box;
  overflow: hidden;
  > img {
    max-width: 100%;
    position: absolute;
    bottom: 0;
    right: 0px;
    z-index: 0;
  }
`;

const BlogLinkContainer = styled.div`
  z-index: 1;
`;

const BlogLinkButton = styled.a`
  display: flex;
  width: 100%;
  button {
    display: flex;
    width: 100%;
    padding: 14px 20px;
    border: 3px solid var(--Verde-Claro, #9bcb8e);
    border-radius: 10px;
    align-items: center;
    gap: 10px;
    color: #fff;
    text-align: center;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.42px;
    background: transparent;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const SocialMediaLinkContainer = styled.div`
  z-index: 1;
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 375px;

    a {
      display: flex;
      flex: 1 1 134.601px;

      button {
        flex: 1 1 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 20px;
        border: none;
        border-radius: 10px;
        background: #fff;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;

const SocialMediaLinkButton = styled.a``;

export const OtherLinksContainer = () => {
  return (
    <Centralizer>
      <Container>
        <BlogLinkContainer>
          <PageSubtitle>Acesse nosso blog!</PageSubtitle>
          <BlogLinkButton href="">
            <button>
              <img src={TablerHandClickIcon} alt="tabler_hand-click-icon" />
              Clique aqui!
            </button>
          </BlogLinkButton>
        </BlogLinkContainer>
        <SocialMediaLinkContainer>
          <PageSubtitle>Siga nossas redes sociais</PageSubtitle>
          <div>
            {companyData.socialMediaLink.map(
              ({ imgPath, name, url }, index) => {
                return (
                  <SocialMediaLinkButton href={url} key={index + "-" + name}>
                    <button>
                      <img src={imgPath} alt="" />
                      {name}
                    </button>
                  </SocialMediaLinkButton>
                );
              }
            )}
          </div>
        </SocialMediaLinkContainer>
        <img src={PillIcon} alt="pill-icon" />
      </Container>
    </Centralizer>
  );
};
