import React from 'react';
import Table from '../../components/Table/Table';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';
import Button from '../../components/button/Button';
import './InvoicePage.css';

function InvoicePage() {
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
        <TableRow>
          <TableCell>september 2023</TableCell>
          <TableCell>€35,-</TableCell>
          <TableCell>september 2023</TableCell>
          <TableCell>september 2023</TableCell>
          <TableCell><Button>Download</Button> </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}

export default InvoicePage;
