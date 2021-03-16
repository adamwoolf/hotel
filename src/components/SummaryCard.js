import React from "react";
import drink from "../assets/los-cocos-img-bg.png";
import moment from "moment";

const SummaryCard = ({ booked, days, submit, promo, selectedRoom }) => {
  let price = selectedRoom.price;
  if (promo) price = selectedRoom.price - selectedRoom.price / promo;



  return (
    <div>
      <img src={drink} alt="" />
      <div className="summary-card">
        <h4>Reservation Summary</h4>
        {!selectedRoom.name && (
          <p style={{ color: "green" }}>Please select a hotel</p>
        )}
        <h5>{selectedRoom.name}</h5>

        <div style={{ display: "flex" }}>
          <div>
            <h6>Check in</h6>
            <p>From 15.00</p>
          </div>
          <div style={{ marginLeft: 30 }}>
            <h6>Check out</h6>
            <p>Before 12.00</p>
          </div>
        </div>
        {!booked.startDate && (
          <p style={{ color: "green" }}>Please select your dates</p>
        )}
        {booked.startDate && (
          <>
            <h6>Reservation Date</h6>
            {booked.startDate && <p>Arrival: {booked.startDate} </p>}
            {booked.endDate && <p> Departure:{booked.endDate} </p>}
          </>
        )}
        {booked.adultsSelected && (
          <>
            <h6>People</h6>
            {booked.adultsSelected > 1 && (
              <span> {booked.adultsSelected} Adults</span>
            )}
            {booked.adultsSelected === 1 && (
              <span> {booked.adultsSelected} Adult</span>
            )}
            {booked.childrenSelected > 1 && (
              <span>, {booked.childrenSelected} Children</span>
            )}
            {booked.childrenSelected === 1 && (
              <span>, {booked.childrenSelected} Child</span>
            )}
          </>
        )}
        <hr />
        {selectedRoom.price && booked.startDate && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6>Total</h6>
            <h6>€{price.toFixed(2) * days}</h6>
          </div>
        )}
        <div style={{ display: "flex" }}>
          <button
            onClick={submit}
            className="save-button"
            disabled={!booked.adultsSelected}
          >
            {!booked.startDate || !selectedRoom.price ? "Please make a selection" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
