/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  word-break: normal;
  width: 90px;
`;

const Title = styled.h1`
  text-align: center;
  color: red;
`;

export default function HomePage() {
  return (
    <div>
      <Title>Covid Survey</Title>
      <Wrapper>
        <Link to="/home/surveys">
          <Button
            className="home-btn"
            style={{ margin: 'auto' }}
            color="primary"
          >
            Open Surveys
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
}
