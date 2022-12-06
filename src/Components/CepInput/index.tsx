import React, {useState} from "react";
import { SearchOutlined } from '@ant-design/icons'

import "./index.scss"

export default function CepInput() {
  const [cep, setCep] = useState("")

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()

    setCep(event.currentTarget.value)
  }

  return (
    <div className="input-wrapper">
      <input type="text" placeholder="Insira seu cep aqui" onChange={onChange} /> 
      <SearchOutlined />
    </div>
  )
}
