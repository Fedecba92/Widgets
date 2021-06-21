import Accordion from "./components/Accordion";
const items = [
  {
    title: "What is react?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use react?",
    content: "you use react by creating components"
  }
];
export default function App() {
  return (
    <div className="container">
      <Accordion items={items} />
    </div>
  );
}
