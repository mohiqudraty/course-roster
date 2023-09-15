import PropTypes from "prop-types";

import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleSelect }) => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <div className="md:w-3/4 mx-auto  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6">
      {cardData.map((course) => (
        <Card key={course.id} course={course} handleSelect={handleSelect}>
          {" "}
        </Card>
      ))}
    </div>
  );
};
Cards.propTypes = {
  handleSelect: PropTypes.func,
};

export default Cards;
