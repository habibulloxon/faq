import React, { useState } from "react";
import FAQs from "./data";
import AskedQuestion from "./Question";
import "./App.css"

export default function App() {
  const [questions, setQuestions] = useState(FAQs);

  return (
    <main>
      <section>
        {questions.map((question) => {
          return (
            <AskedQuestion key={question.id} {...question}></AskedQuestion>
          );
        })}
      </section>
    </main>
  );
}
