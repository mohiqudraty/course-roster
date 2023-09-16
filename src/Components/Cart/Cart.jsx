import PropTypes from "prop-types";

const Cart = ({ selectCourse, totalCredit, remainingCredit, totalPrice }) => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-bold text-[#2F80ED] border-b-2 pb-4">
        Credit Hour Remaining {remainingCredit} hr
      </h3>
      <h3 className="text-xl font-bold my-4">Course Name</h3>
      {selectCourse.map((course, idx) => (
        <p className="text-sm" key={idx}>
          {idx + 1}.{course.title}
        </p>
      ))}

      <p className="py-3 my-3  border-y-2">Total Credit Hour : {totalCredit}</p>
      <p>Total Price : ${totalPrice} USD</p>
    </div>
  );
};
Cart.propTypes = {
  selectCourse: PropTypes.array,
  totalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};
export default Cart;
