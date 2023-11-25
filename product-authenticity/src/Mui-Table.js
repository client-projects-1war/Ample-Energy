{/*
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Product Name', headerName: 'Product Name', width: 200 },
  { field: 'Product Code', headerName: 'Product Code', width: 150 },
  {
    field: 'Actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <strong>
        <button
          onClick={() => handleCopyProductCode(params.row['Product Code'])}
          className="btn btn-primary btn-sm"
        >
          Copy
        </button>
      </strong>
    ),
  },
];

const DataTable = () => {
  const [rows, setRows] = React.useState([]);

  const handleCopyProductCode = (productCode) => {
    // Use the Clipboard API to copy the product code to the clipboard
    navigator.clipboard.writeText(productCode)
      .then(() => {
        alert('Product Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Error copying product code:', err);
      });
  };

  React.useEffect(() => {
    // Fetch data using Axios
    axios.get('https://it.1war.company/authenticity.json')
      .then(response => {
        // Transform data to match the structure expected by DataGrid
        const formattedRows = response.data.map((product) => ({
          id: product._id.$oid,
          'Product Name': product.ProductName,
          'Product Code': product.ProductCode,
        }));
        setRows(formattedRows);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

*/}