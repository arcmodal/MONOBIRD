import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Bar = styled.div`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: flex-start;
  padding: 0 10px;
`;

const Logo = styled.img`
  max-width: 50px;
  margin-right: 20px;
`;

const Ul = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  color: white;
  font-family: Helvetica, sans-serif;
  margin: 15px 10px;
  list-style: none;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Header = ({ title }) => (
  <Bar>
    <Logo src="//images.arcteryx.com/foundation-ui/svgs/ArcBirdWhite.svg" />
    <Ul>
      <Li>{title}</Li>
      <Li>Men's</Li>
      <Li>Women's</Li>
      <Li>Explore</Li>
    </Ul>
  </Bar>
);

Header.PropTypes = {
  title: PropTypes.string.isRequired
};
export default Header;