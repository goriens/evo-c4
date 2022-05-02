import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const orders = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch(
      addData({
        id: nanoid(5),
        problem: "",
        const: 0,
        status: {
          notAccepted: "notAccepted",
          pending: "pending",
          progress: "progress",
          done: "done",
        },
      })
    );
  };

  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={(e) => setText(e.target.value)}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          onChange={(e) => setText(e.target.value)}
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={(e) => setText(e.target.value)}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" onClick={handleAdd}>
          submit
        </button>
      </div>
      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          show
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        {orders.map((e) => (
          <div className="past-orders">
            <span className="id"></span>
            {e.id} <span className="problem"></span>{" "}
            <span className="cost">
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            </span>
            <p className="status">Status: </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
