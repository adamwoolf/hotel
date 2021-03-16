import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import bed from "../assets/double-bed.svg";

const HotelCard = ({ h, click, promo, selected }) => {
  let price = h.price;
  if (promo) price = h.price - h.price / promo;

  return (
    <div
      className={h.id === selected.id ? "hotel-card selected" : "hotel-card"}
      onClick={click}
    >
      <Row>
        <Col xs={4}>
          <div className="hotel-image">
            <img src={h.image} />
          </div>
        </Col>
        <Col xs={8}>
          <div className="hotel-card-text">
            <h6>{h.name}</h6>
            <small>{h.description}</small>
            <br />
            <small>Size: {h.size}</small>

            <div>
              <img src={bed} style={{ width: 25 }} />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <div className="hotel-meta">
                    <small>Beds: {h.beds}</small>
                  </div>
                  <div className="hotel-meta">
                    <small>People: {h.people}</small>
                  </div>
                </div>
                <h6>€{price.toFixed(2)}</h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HotelCard;
