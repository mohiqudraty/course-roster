import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-3 gap-6">
      {cardData.map((course) => (
        <Card key={course.id} course={course}>
          {" "}
        </Card>
      ))}
    </div>
  );
};

export default Cards;
