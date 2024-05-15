import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/icons-material/IosShare";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllProducts,
  deleteProductById,
  IMAGE_URL
} from "../api/apiService";
import TablePagination from "@mui/material/TablePagination"; // Import TablePagination

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    width: "100%",
    margin: "auto"
  },
  removeLink: {
    textDecoration: "none"
  },
  tableContainer: {
    width: "100%" // Thêm kiểu CSS này để làm cho TableContainer chiều ngang full màn hình
  }
}));

export default function Home() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [checkDeleteProduct, setCheckDeleteProduct] = useState(false);
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const [rowsPerPage, setRowsPerPage] = useState(5); // Thêm state cho số hàng trên mỗi trang
  const navigate = useNavigate();
  useEffect(() => {
    getAllProducts("product").then((item) => setProducts(item.data));
  }, [navigate]);

  const RawHTML = (body, className) => (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: body ? body.replace(/\n/g, "<br />") : ""
      }}
    />
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteProductByIdHandler = (id) => {
    deleteProductById("product", id).then((item) => {
      console.log(item);
      if (item.status === 204) {
        setCheckDeleteProduct(true);
        setProducts(products.filter((key) => key.id !== id));
      }
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {checkDeleteProduct && (
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setCheckDeleteProduct(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Delete successfully
              </Alert>
            )}
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Modify</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? products.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : products
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell width={260} component="th" scope="row">
                        {row.productName}
                      </TableCell>
                      <TableCell align="left">
                        <div>
                          {row.gallary &&
                            row.gallary.length > 0 &&
                            row.gallary.map((gallery, index) => (
                              <img
                                key={index}
                                src={gallery.id}
                                style={{ width: 100 }}
                                alt={gallery.id}
                              />
                            ))}
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <strong>
                          {Number(row.regularPrice).toLocaleString("vi-VN")}
                        </strong>
                      </TableCell>
                      <TableCell width={100} align="center">
                        {row.category?.CategoryName}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          to={`/edit/product/${row.id}`}
                          className={classes.removeLink}
                        >
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                          >
                            Edit
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => deleteProductByIdHandler(row.id)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
