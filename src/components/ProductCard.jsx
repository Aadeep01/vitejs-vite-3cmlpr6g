import RatingWidget from "./RatingWidget";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-yellow-500">⭐ {product.avgRating} ({product.totalRatings} ratings)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

export default ProductCard;