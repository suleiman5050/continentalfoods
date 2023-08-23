import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Error,
  Loading,
  PageHero,
  ProductImages,
  AddToCart,
  Stars,
} from "../Components";
import { single_product_url as url } from "../utils/constants";
import { useProductsContext } from "../Contexts/product_context";
import { Link, useParams, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isSingleProductLoading: loading,
    isSingleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars reviews={reviews} stars={stars} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "in stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span> {sku}
            </p>
            <p className="info">
              <span> Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;

const Wrapper = styled.div`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    max-width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
