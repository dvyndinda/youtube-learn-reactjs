import { useEffect, useState, useRef } from "react";
import ButtonElement from "../element/button/ButtonElement";
import ProductCard from "../fragment/ProductCard";
import { getProduct } from "../../service/product.service";
import { getUsername } from "../../service/auth.service";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "/image/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
//             officiis placeat maiores! Officia eius est placeat deleniti harum
//             ullam pariatur nobis, quo molestias quasi nostrum natus facere,
//             ducimus delectus quibusdam!`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     image: "/image/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Ada",
//     price: 750000,
//     image: "/image/shoes-1.jpg",
//     description: `Officia eius est placeat deleniti harum
//             ullam pariatur nobis, quo molestias quasi nostrum natus facere.`,
//   },
// ];

const email = localStorage.getItem("email");
const token = localStorage.getItem("token");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProduct] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    setUsername(getUsername(token));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = ({ id }) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  // const cartRef = useRef([
  //   {
  //     id: 1,
  //     qty: 1,
  //   },
  // ]);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, {id, qty: 5}];
  // }

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    getProduct((data) => {
      // console.log(data);
      setProduct(data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <ButtonElement variant="bg-black ml-5" onClick={handleLogout}>
          Logout
        </ButtonElement>
      </div>
      <div className="flex justify-center py-5 gap-2">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductCard.HeaderCard image={product.image} />
              <ProductCard.BodyCard name={product.title}>
                {product.description}
              </ProductCard.BodyCard>
              <ProductCard.DetailCard
                price={product.price}
                id={product.id}
                addToCard={handleAddToCart}
              />
            </ProductCard>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            {cart.map((item) => {
              console.log(item);
              return <li key={item.id}>{item.id}</li>;
            })}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 && cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
