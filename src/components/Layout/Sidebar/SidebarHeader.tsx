import { Typography } from "@/utils/Typography.js";
import styled from "@emotion/styled";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div`
  width: 45px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #14a651;
  background: gradient(45deg, rgb(20 166 81) 40%, rgb(255 255 255) 100%);
  margin-right: 10px;
  margin-left: 4px;
`;
export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ ...rest }) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo>AB</StyledLogo>
        <Typography variant="subtitle1" fontWeight={700} color="#14a651">
          Account Builder
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
export default SidebarHeader;
