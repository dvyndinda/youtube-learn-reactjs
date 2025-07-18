import ButtonElement from "../element/button/ButtonElement";

const ProductCard = ({children}) => {
  return (
    <>
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
        {children}
      </div>
    </>
  );
};

const HeaderCard = ({image}) => {
  return (
    <>
      <a href="">
        <img
          src={image}
          alt="product"
          className="p-5 rounded-lg h-60 w-full object-cover"
        />
      </a>
    </>
  );
};

const BodyCard = ({name, children}) => {
  return (
    <>
      <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {name}
          </h5>
          <p className="text-m text-white">
            {children}
          </p>
        </a>
      </div>
    </>
  );
};

const DetailCard = ({price, addToCard, id}) => {
  return (
    <>
      <div className="flex items-center justify-between px-5 py-5">
        <span className="text-lg font-bold text-white mr-5">Rp {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
        <ButtonElement variant="bg-blue-600" onClick={() => addToCard({ id })}>Add To Cart</ButtonElement>
      </div>
    </>
  );
};

ProductCard.HeaderCard = HeaderCard;
ProductCard.BodyCard = BodyCard;
ProductCard.DetailCard = DetailCard;
 
export default ProductCard;
