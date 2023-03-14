import React, { useState, useEffect } from "react";
import axios from "axios";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const response = await axios.get("http://localhost:3000/produtos");
      setProdutos(response.data);
    }
    fetchProdutos();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Grupo</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.codigo}>
              <td>{produto.codigo}</td>
              <td>{produto.descricao}</td>
              <td>{produto.valor}</td>
              <td>{produto.grupo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Produtos;
