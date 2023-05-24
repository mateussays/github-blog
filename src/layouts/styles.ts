import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 18.5rem;
  max-height: 100%;
  background: rgb(13, 40, 66);
  background: linear-gradient(
    102deg,
    rgba(13, 40, 66, 1) 0%,
    rgba(11, 29, 47, 1) 100%
  );
`

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`
