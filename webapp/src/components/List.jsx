import React from "react";

import { Table, Button } from "react-bootstrap";

const List = ({ headers, items = [], remove }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          {headers.map(h => (
            <th key={h.key}>{h.title}</th>
          ))}
          {remove && <th>Ações</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            {headers.map(h => (
              <td key={h.key}>{item[h.key]}</td>
            ))}
            {remove && (
              <td>
                <Button
                  type="button"
                  onClick={() => remove(item)}
                  size="sm"
                >
                  Remover
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default List;