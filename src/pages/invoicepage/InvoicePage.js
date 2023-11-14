import React, {useEffect, useState} from 'react';
import Table from '../../components/Table/Table';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';
import Button from '../../components/button/Button';
import './InvoicePage.css';
import axios from 'axios';

function InvoicePage() {
  const [invoices, setInvoices] = useState([]);

  async function fetchinvoices() {
    try {
      const {data} = await axios.get(
          'http://localhost:8080/invoices',
      );
      setInvoices(data);
      console.log(data);
    } catch (e) {

    }
  }

  async function downloadInvoice(id) {
    try {
      const response = await axios.get(`http://localhost:8080/invoices/${id}/file`, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchinvoices();
  }, []);


  return (
    <div className='invoices'>
      <Table title="Facturen">
        <TableHeader>
          <TableCell><h3>Maand</h3></TableCell>
          <TableCell><h3>Bedrag</h3></TableCell>
          <TableCell><h3>Betaald</h3></TableCell>
          <TableCell><h3>Contract</h3></TableCell>
          <TableCell><h3>Download</h3></TableCell>
        </TableHeader>
        {invoices.map((invoice) => {
          return <TableRow key={invoice}>
            <TableCell>{invoice.month} {invoice.year}</TableCell>
            <TableCell>{invoice.price}</TableCell>
            <TableCell>{invoice.paid ? 'Betaald':'Te betalen'}</TableCell>
            <TableCell>
              {invoice.contractId ? invoice.contractId : '-'}
            </TableCell>
            <TableCell>
              <Button onclick={downloadInvoice()}>
                Download
              </Button>
            </TableCell>
          </TableRow>;
        })}
      </Table>
    </div>
  );
}

export default InvoicePage;
