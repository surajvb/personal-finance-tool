import React from "react";
import "./MoneyTools.css";
import budget from "../assets/img/saving.png";
import calculator from "../assets/img/hierarchy-structure.png";
import goals from "../assets/img/money-bag.png";

const MoneyTools = () => {
  return (
    <div className="moneytools">
      <div className="moneytools__title">Money Management Tools</div>
      <div className="moneytools__tiles">
        <div className="tile">
          <div className="tile__image">
            <img src={budget} alt="" />
          </div>
          <div className="tile__heading">Monthly Budget</div>
          <div className="tile__action">
            <button className="tile__button"> View Details</button>
          </div>
        </div>
        <div className="tile">
          <div className="tile__image">
            <img src={calculator} alt="" />
          </div>
          <div className="tile__heading">Interest Calculator</div>
          <div className="tile__action">
            <button className="tile__button"> View Details</button>
          </div>
        </div>
        <div className="tile">
          <div className="tile__image">
            <img src={goals} alt="" />
          </div>
          <div className="tile__heading">Financial Goals</div>
          <div className="tile__action">
            <button className="tile__button"> View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTools;
