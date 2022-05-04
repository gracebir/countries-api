import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardContainer = styled(Link)`
    max-width: 18rem;
    max-height: 50rem;
    box-shadow: 0 4px 8px 0 var( --color-very-dark-blue-light);
    border-radius: 0 0 5px 5px;
    text-decoration: none;
`

const CardHeader = styled.div`
    height: 8rem;
`

const CardBody = styled.div`
    background-color: var(--color-dark-blue);
    color: var(--color-white-dark-mode);
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 0 0 5px 5px;
`

const CardTitle = styled.p`
    font-weight: 800;
    font-size: 14px;
`

const SpanCard = styled.span`
    font-weight: 600;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    margin-bottom: 2rem;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
`

const Card = ({
    name, 
    img,
    population,
    region,
    capital
}) => {
  return (
    <CardContainer to={`/detail/${name}`}>
          <CardHeader>
              <Img src={img} alt='alt'/>
          </CardHeader>
          <CardBody>
              <CardTitle>{ name}</CardTitle>
              <CardInfo>
                  <p><SpanCard>Population: </SpanCard>{population}</p>
                  <p><SpanCard>Region: </SpanCard>{region}</p>
                  <p><SpanCard>Capital: </SpanCard>{capital}</p>
              </CardInfo>
          </CardBody>
    </CardContainer>
  )
}

export default Card