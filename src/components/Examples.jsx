import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedContent, setSelectedContent] = useState("");

  function handleSelected(topic) {
    setSelectedContent(topic);
  }

  let displayedContent = <p>Please select a topic!</p>;

  if (selectedContent) {
    displayedContent = (
      <article id="tab-content">
        <h3>{EXAMPLES[selectedContent].title}</h3>
        <p>{EXAMPLES[selectedContent].description}</p>
        <pre>
          <code>{EXAMPLES[selectedContent].code}</code>
        </pre>
      </article>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={selectedContent == "components"}
              onClick={() => handleSelected("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedContent == "jsx"}
              onClick={() => handleSelected("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedContent == "props"}
              onClick={() => handleSelected("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedContent == "state"}
              onClick={() => handleSelected("state")}
            >
              State
            </TabButton>
          </>
        }
      ></Tabs>
      {displayedContent}
    </Section>
  );
}
