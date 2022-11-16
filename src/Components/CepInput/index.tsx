import React, {useState} from "react";

export default function CepInput() {
  const [cep, setCep] = useState("")

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()

    setCep(event.currentTarget.value)
  }

  return (
    <div>
      <input type="text" placeholder="Insira seu cep aqui" onChange={onChange} /> 
      <button>Search</button>
    </div>
  )
}
