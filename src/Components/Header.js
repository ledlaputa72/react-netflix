import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//위는 <a>와 같은 링크를 html 방식이 아닌 자바스크립트 방식으로 사용하게 해줌
import styled from 'styled-components';

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//위의 import { Link } from 'react-router-dom';가 필요하다.
// href는 사용되지 않으며 to 로 바꾼다.

//withRouter로 감싸야 props를 호출할 수 있다.
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

//위와 같다
/* const HeaderC = (props) => (
    <Header>
      {console.log(props)}
      <List>
        <Item current={false}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={true}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={false}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
  
  export default withRouter(HeaderC); */
