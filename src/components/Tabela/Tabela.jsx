import React, { useRef } from 'react';
import { useTable } from 'react-table';
import { CSVLink } from 'react-csv';
import html2canvas from 'html2canvas';
import './styles.css';

const data = [
  { id: '19/08/2023 12:30', min5: '0,1', min10: '0,0', min15: '0,2', min30: '0,0', h1: '0,0', h2: '0,0', h3: '0,0', h4: '0,0', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},
  { id: '19/08/2023 13:00', min5: '0,0', min10: '0,3', min15: '0,0', min30: '0,0', h1: '0,0', h2: '0,0', h3: '0,0', h4: '0,0', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},
  { id: '19/08/2023 13:30', min5: '0,0', min10: '0,0', min15: '0,0', min30: '0,4', h1: '0,0', h2: '0,0', h3: '0,0', h4: '0,0', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},
  { id: '19/08/2023 14:00', min5: '0,0', min10: '0,0', min15: '0,0', min30: '0,0', h1: '0,5', h2: '0,0', h3: '0,0', h4: '0,0', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},
  { id: '19/08/2023 14:30', min5: '0,0', min10: '0,0', min15: '0,0', min30: '0,0', h1: '0,0', h2: '0,6', h3: '0,0', h4: '0,0', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},
  { id: '19/08/2023 15:00', min5: '0,0', min10: '0,0', min15: '0,0', min30: '0,0', h1: '0,0', h2: '0,0', h3: '0,7', h4: '0,0', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},
  { id: '19/08/2023 15:30', min5: '0,0', min10: '0,0', min15: '0,0', min30: '0,0', h1: '0,0', h2: '0,0', h3: '0,0', h4: '0,8', h5: '0,0', h6: '0,0', h12: '0,0', h24: '0,0', h96: '0,0', mensal: '0,0', sla: '0,0'},

];

const header = { id: 'Data', min5: '5 Minutos', min10: '10 Minutos', min15: '15 Minutos', min30: '30 Minutos', h1: '1 Hora', h2: '2 Horas', h3: '3 Horas', h4: '4 Horas', h6: '6 Horas', h12: '12 Horas', h24: '24 Horas', h96: '96 Horas', mensal: 'Mensal', sla: 'SLA', chuva: 'Chuva' };

const table = [header, ...data];




const columns = [
  { Header: 'Horario', accessor: 'id' },
  { Header: '05 min', accessor: 'min5' },
  { Header: '10 min', accessor: 'min10' },
  { Header: '15 min', accessor: 'min15' },
  { Header: '30 min', accessor: 'min30' },
  { Header: '1h', accessor: 'h1' },
  { Header: '2h', accessor: 'h2' },
  { Header: '3h', accessor: 'h3' },
  { Header: '4h', accessor: 'h4' },
  { Header: '5h', accessor: 'h5' },
  { Header: '6h', accessor: 'h6' },
  { Header: '12h', accessor: 'h12' },
  { Header: '24h', accessor: 'h24' },
  { Header: '96h', accessor: 'h96' },
  { Header: 'Mensal', accessor: 'mensal' }
  ];


const Tabela = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const csvData = table.map(row => ({
    Horario: row.id,
    '05 min': row.min5,
    '10 min': row.min10,
    '15 min': row.min15,
    '30 min': row.min30,
    '1h': row.h1,
    '2h': row.h2,
    '3h': row.h3,
    '4h': row.h4,
    '5h': row.h5,
    '6h': row.h6,
    '12h': row.h12,
    '24h': row.h24,
    '96h': row.h96,
    'Mensal': row.mensal, // Corrected the capitalization
  }));

  const tableRef = useRef(null);

  const exportToJPG = () => {
    if (tableRef.current) {
      html2canvas(tableRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'tabela_export.jpg';
        link.click();
      });
    }
  };

  return (
    <div>
      <div className="table-header">Chuvas</div>
      <table {...getTableProps()} className="custom-table" ref={tableRef}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '8px',
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <CSVLink data={csvData} filename={'tabela_export.csv'} className="button">
        Exportar CSV
      </CSVLink>
      <button onClick={exportToJPG} className="button">
        Exportar JPG
      </button>
    </div>
  );
};

export default Tabela;