import styled from "@emotion/styled";

export const RankingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 1.1rem;
  .winner {
    height: 80vh;
    justify-content: center;
    gap: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      margin-bottom: 10px;
      max-width: 300px;
    }
    div {
      font-weight: bold;
    }
    button {
      border: 0;
      outline: 0;
      background-color: white;
      border-radius: 7px;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
      width: 70px;
      height: 32px;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export const RankingListComponents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  .item {
    padding: 0 7.5px 0 7.5px;
    box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.2);
    border-radius: 13px;
    .id {
      font-weight: bold;
      width: 30px;
      display: flex;
      justify-content: center;
    }
    .name {
      margin-left: 10px;
    }
    align-items: center;
    display: flex;
    gap: 7.5px;
    text-align: center;
    img {
      width: 70px;
    }
  }
`;
