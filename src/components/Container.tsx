import styled from "styled-components/macro";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex: 1;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export default Container;
