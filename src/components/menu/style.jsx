import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: #007bff;
  min-height: 100%;
  min-width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 10px;

  &:hover {
    background: #0272eb;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled.div`
  background: #0272eb;
  height: 50px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  border-radius: 10px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;

export const DeslogarButton = styled(Button)`
  margin-right: 10px;
`