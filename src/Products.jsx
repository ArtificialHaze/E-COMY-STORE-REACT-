import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import useStyles from "./productsStyles";

const Products = ({ products, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
