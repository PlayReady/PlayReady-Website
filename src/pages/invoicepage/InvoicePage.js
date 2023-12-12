import React, {useEffect, useState} from 'react';
import Table from '../../components/Table/Table';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';
import Button from '../../components/button/Button';
import './InvoicePage.css';
import axios from 'axios';
import TextInput from '../../components/textinput/TextInput';
import FileInput from '../../components/fileInput/FileInput';

function InvoicePage() {
  const [invoices, setInvoices] = useState([]);
  const [file, setFile] = useState();
  const [invoiceData, setInvoiceData] = useState(
      {
        year: '',
        month: '',
        price: '',
      });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setInvoiceData({...invoiceData, [name]: value});
  };

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

  const onFileChange =(event)=> {
    setFile(event.target.files[0]);
  };
  async function uploadInvoice() {
    try {
      const formData = new FormData();
      formData.append('year', invoiceData.year);
      formData.append('month', invoiceData.month);
      formData.append('price', invoiceData.price);
      formData.append('file', file);

      const {data} = await axios.post(
          'http://localhost:8080/invoices',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
      );

      console.log(data);
    } catch (e) {
      console.error(e);
      throw e;
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
              <Button onclick={() => downloadInvoice(invoice.id)}>
                Download
              </Button>
            </TableCell>
          </TableRow>;
        })}
      </Table>
      jaar<TextInput
        name="year"
        onchange={handleInputChange}
        value={invoiceData.year}
      />
      maand<TextInput
        name="month"
        onchange={handleInputChange}
        value={invoiceData.month}
      />
      bedrag<TextInput
        name="price"
        onchange={handleInputChange}
        value={invoiceData.price}
      />
      <FileInput type="file" onChange={onFileChange}/>
      <Button onclick={uploadInvoice}>
        add
      </Button>
    </div>
  );
}

export default InvoicePage;
