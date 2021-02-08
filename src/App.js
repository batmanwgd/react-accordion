import React, { useState } from "react";
import "./styles.css";

import Accordion from "./Accordion";

import Card from "./Card";
import Data from "./Data";

export default function App() {
  const [activeEventKey, setActiveEventKey] = useState(0);

  return (
    <div className="App">
      <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
        {Data.map(({ question, answer }, index) => (
          <Card key={index}>
            <Accordion.Toggle element={Card.Header} eventKey={index}>
              {question}
              {activeEventKey !== index && <span>👇🏻</span>}
              {activeEventKey === index && <span>👆🏻</span>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index} element={Card.Body}>
              {answer}
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}
