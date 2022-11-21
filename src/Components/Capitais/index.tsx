import React from 'react'

const dados = [
  {
    name: "Rio de Janeiro",
    minTemp: "18",
    maxTemp: "27",
  },
  {
    name: "São Paulo",
    minTemp: "14",
    maxTemp: "22",
  },
  {
    name: "Belo Horizonte",
    minTemp: "21",
    maxTemp: "32",
  },
  {
    name: "Brasília",
    minTemp: "24",
    maxTemp: "37",
  },
  {
    name: "Belém",
    minTemp: "23",
    maxTemp: "37",
  },
]

export const Capitais = () => {
  return (
    <div>
      <h2>Capitais</h2>  
      min max
      {dados.map(item => (
        <div>
          {item.minTemp} {item.maxTemp} {item.name}
        </div>
      ))}
    </div>
  )
}
