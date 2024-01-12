import styled from "styled-components";
import { Centralizer } from "../../../../componentsStyled";
import { companyData } from "../../../../companyData/companyData";
import LocationIcon from "../../../../assets/location-icon.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const LocationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 375px;
  p {
    display: flex;
    gap: 7px;
    align-items: center;
    margin: 0;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.42px;
  }
`;

export const LocationContainer = () => {
  return (
    <Centralizer>
      <Container>
        {companyData.locations.map(({ name, address }) => {
          return (
            <LocationBlock>
              <p>
                <img src={LocationIcon} alt="location-icon" />
                {name}
              </p>
              <p>{address}</p>
            </LocationBlock>
          );
        })}
      </Container>
    </Centralizer>
  );
};
