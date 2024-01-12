import { ReactNode } from "react";
import styled from "styled-components";
import turnDownArrowIcon from "../../assets/turn-down-arrow-icon.svg";

const PageSubtitleElement = styled.h4`
  display: flex;
  align-items: end;
  gap: 20px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
`;

interface PageSubtitleProps {
  children: ReactNode;
}
export const PageSubtitle = ({ children }: PageSubtitleProps) => {
  return (
    <PageSubtitleElement>
      <span>{children}</span>
      <img src={turnDownArrowIcon} alt="turn-down-arrow-icon" />
    </PageSubtitleElement>
  );
};
