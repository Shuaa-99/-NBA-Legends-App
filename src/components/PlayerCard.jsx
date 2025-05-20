import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const PlayerCard = ({ name, img, statistics }) => {
  return (
    <div
      style={{
        height: "50%",
        maxWidth: "50%",
        borderRadius: "8px",
        opacity: "0.9",
      }}
    >
      <Col>
        <Card className="h-100">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Card.Img
              variant="top"
              src={img}
              alt={name}
              style={{
                height: "200px",
                maxWidth: "50%",
                borderRadius: "8px",
                margin: "0px",
              }}
            />{" "}
            <Card.Text as="div">
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  listStyleType: "none",
                  textAlign: "left",
                }}
              >
                {statistics.map((stat, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    <span
                      role="img"
                      aria-label="basketball"
                      style={{ marginRight: "0.5rem" }}
                    >
                      🏀
                    </span>
                    {stat}
                  </li>
                ))}
              </ul>
            </Card.Text>
          </div>

          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default PlayerCard;
