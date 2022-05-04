import React from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'

const DropDownWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const DropBottom = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--color-dark-blue);
    box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.75);
    gap: 1em;
    border-radius: 5px;
    padding: .5em 1em;
    cursor: pointer;
`

const DropdownLabel = styled.span`
    font-size: .9em;
    color: var(--color-white-dark-mode);
    font-weight: 300;
`

const DropdowContent = styled.div`
    position: absolute;
    background-color: var(--almost-white);
    @media (min-width: 45em) {
        width: 10rem;
        border-radius: 5px;
        margin-top: .4em;
        background-color: var(--color-dark-blue);
        box-shadow: -1px 0px 5px 0px var( --color-very-dark-blue-light);
        z-index: 1;
        padding: 0 1.4em;
    }
`
const DropItemGroup = styled.div`
    display: flex;
    cursor: pointer;
    margin: .6em 0;
    gap: .7em;
`

const ItemText = styled.span`
    white-space: nowrap;
    color: var(--color-white-dark-mode);
    font-size: 1em;
`

const Dropdown = ({ items }) => {
    
    const [isOpen, setisOpen] = React.useState(false)
    const [dLabel, setDLabel] = React.useState();
    const onClick = () => {
        setisOpen(!isOpen)
    }

    const setValue = (value) =>{
        setDLabel(value);
        setisOpen(false)
    }
  return (
    <DropDownWrapper>
        <DropBottom onClick={onClick}>
            <DropdownLabel>{dLabel ? dLabel : 'Filter by Region'}</DropdownLabel>
           <RiArrowDownSLine/>
          </DropBottom>
          {isOpen ? (
            <DropdowContent>
                {items?.map((item, i)=>(
                    <DropItemGroup onClick={()=> setValue(item.itemLabel) } key={i}>
                        <ItemText>{item.itemLabel}</ItemText>
                    </DropItemGroup>
                ))}
            </DropdowContent>
          ): null}
       
    </DropDownWrapper>
  )
}

export default Dropdown