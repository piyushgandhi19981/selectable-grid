import "./styles.css";

import SelectableGrid from "./components/SelectableGrid";

export default function App() {
  return (
    <div className="App">
      <h2>Selectable Grid</h2>
      <SelectableGrid rows={15} columns={10} />
    </div>
  );
}
