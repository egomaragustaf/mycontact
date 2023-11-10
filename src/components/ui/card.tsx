import styled from "@emotion/styled";

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  margin-bottom: 1rem;
  ${(props) => props.onClick !== undefined && `cursor: pointer`}
`;

const CardTitle = styled.h3`
  font-size: 16px;
  padding-bottom: 0rem;
  text-align: left;
`;

const CardContent = styled.p`
  font-size: 12px;
  text-align: left;
  color: #999;
`;

export { Card, CardContent, CardTitle };
