import PropTypes from "prop-types";
import { FaDollarSign, FaBook } from "react-icons/fa";

const Card = ({ course, handleSelect }) => {
  const { cover, title, description, price, credit } = course;
  return (
    <div className="w-[310px] h-[400px]">
      <div className="p-4">
        <img src={cover} alt={`Cover images of ${title}`} />
        <h3 className="text-lg font-semibold mt-4 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 ">{description}</p>
        <div className="flex justify-between  mt-5 mb-6">
          <p className="flex items-center text-[#1C1B1B] gap-3">
            <span>
              <FaDollarSign></FaDollarSign>
            </span>
            {price}
          </p>
          <p className="flex items-center text-[#1C1B1B] gap-3">
            <FaBook></FaBook>
            {credit}hr
          </p>
        </div>
        <button
          onClick={() => handleSelect(course)}
          className="text-lg font-semibold text-white w-full text-center bg-[#2F80ED] rounded-lg py-2 "
        >
          Select
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelect: PropTypes.func,
};

export default Card;
