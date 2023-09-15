import PropTypes from "prop-types";
const Card = ({ course }) => {
  const { id, cover, title, description, price, credit } = course;
  return (
    <div className="w-[310px] h-[400px]">
      <div className="p-4">
        <img src={cover} alt={`Cover images of ${title}`} />
        <h3 className="text-lg font-semibold mt-4 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 ">{description}</p>
        <div className="flex justify-between mt-5 mb-6">
          <p>${price}</p>
          <p>{credit}hr</p>
        </div>
        <button className="text-lg font-semibold text-white w-full text-center bg-[#2F80ED] rounded-lg ">
          Select
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Card;
