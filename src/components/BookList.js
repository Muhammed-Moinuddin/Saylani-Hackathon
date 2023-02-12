import React, { useEffect, useState } from "react";
import {Table, TableContainer, Paper, TableBody, TableHead, TableRow, TableCell} from '@mui/material';
import BookDataService from "../services/book.services";    
import {Button, TextField, Box, Alert} from '@mui/material'; 

const BooksList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <TableContainer component={Paper} elevation={4} sx={{m: 4, p: 2}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Book Title</TableCell>
            <TableCell>Book Author</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {books.map((doc, index) => {
            return (
              <TableRow key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </TableRow>
              
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default BooksList;