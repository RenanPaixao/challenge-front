import styled from 'styled-components';

export const Wrapper = styled.ul`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  background-color: var(--white);

  li {
    padding: 0.7rem;
    margin: 0.6rem 0;

    @media (min-width: 900px) {
      min-width: max-content;
      padding: 0 0.3rem;
    }
    @media (min-width: 1100px) {
      padding: 0 0.9rem;
      font-size: 0.9rem;
    }
  }

  @media (min-width: 900px) {
    padding: 0;
    flex-direction: row;
  }
`;
export const ProfileLi = styled.li`
  display: flex;
  align-items: center;

  img {
    height: 1.6rem;
    margin-right: 0.3rem;
  }

  @media (min-width: 600px) {
    display: none;
  }

  @media (min-width: 900px) {
    margin: 0 auto;
  }
`;
