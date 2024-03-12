import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./components/data";
import Header from "./components/header";
import CoreConcept from "./components/coreConcept";
import TabButton from "./components/button";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function onButtonClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  function renderCoreConcepts() {
    return CORE_CONCEPTS.map((concept, i) => (
      <CoreConcept key={i} {...concept} />
    ));
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>{renderCoreConcepts()}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {["components", "jsx", "props", "state"].map((topic) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onClick={() => onButtonClick(topic)}
              >
                {topic}
              </TabButton>
            ))}
          </menu>

          <div id="tab-content">
            {selectedTopic ? (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </>
            ) : (
              <p>Please select a topic</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
