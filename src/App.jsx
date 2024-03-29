// eslint-disable-next-line no-unused-vars
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";

function App() {
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  //handleSelect for getting card data
  const handleSelect = (course) => {
    const isDuplicate = selectCourse.find((cart) => course.id == cart.id);
    if (isDuplicate) {
      // alert("toast coming");
      toast.warn(`This course has already been selected
      You cannot select more than one course`);
    } else {
      let credit = course.credit;
      selectCourse.forEach((cart) => {
        credit += cart.credit;
      });
      const remainingTotalCredit = 20 - credit;

      let price = course.price;
      selectCourse.forEach((coursePrice) => {
        price += coursePrice.price;
      });
      if (credit > 20) {
        toast.info(
          `You don't have enough credit. Please add credit balance then try again. Thank you`
        );
      } else {
        setRemainingCredit(remainingTotalCredit);
        setTotalCredit(credit);
        setTotalPrice(price);
        const newSelectCourse = [...selectCourse, course];
        setSelectCourse(newSelectCourse);
      }
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-12 mb-7">
        Course Registration
      </h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <Cards handleSelect={handleSelect}></Cards>
        <Cart
          selectCourse={selectCourse}
          remainingCredit={remainingCredit}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
