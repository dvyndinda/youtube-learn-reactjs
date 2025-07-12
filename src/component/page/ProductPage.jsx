import ButtonElement from "../element/button/ButtonElement";
import ProductCard from "../fragment/ProductCard";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp1.000.000,-",
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            officiis placeat maiores! Officia eius est placeat deleniti harum
            ullam pariatur nobis, quo molestias quasi nostrum natus facere,
            ducimus delectus quibusdam!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp500.000,-",
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Ada",
    price: "Rp250.000,-",
    image: "/image/shoes-1.jpg",
    description: `Officia eius est placeat deleniti harum
            ullam pariatur nobis, quo molestias quasi nostrum natus facere.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <ButtonElement variant="bg-black ml-5" onClick={handleLogout}>
          Logout
        </ButtonElement>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductCard.HeaderCard image={product.image} />
            <ProductCard.BodyCard name={product.name}>
              {product.description}
            </ProductCard.BodyCard>
            <ProductCard.DetailCard price={product.price} />
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
