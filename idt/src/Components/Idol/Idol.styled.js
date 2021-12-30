import styled from "@emotion/styled";

export const IdolContainer = styled.div`
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  img {
    height: 100%;
    max-width: 100%;
  }
  .name {
    position: sticky;
    height: 20%;
    bottom: 25px;
    z-index: 9999;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    color: white;
    text-shadow: 0px 0px 3px black;
    align-items: flex-start;
  }
`;
