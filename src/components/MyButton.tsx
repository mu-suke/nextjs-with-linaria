import type React from 'react'
import {styled} from "@linaria/react";

const MyButton: React.FC = () => {
  const Button = styled.button`
    color: red;
    padding: 8px 10px;
  `
  return (
    <Button>Linaria Button</Button>
  )
}

export default MyButton
