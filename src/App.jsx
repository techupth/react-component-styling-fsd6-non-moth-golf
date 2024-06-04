import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <h1>Buttons & Alert</h1>
      <div className="container">
        <div className="button-components-section">
          <div className="btn">
            <span>Primary</span>
            <span>
              <Button type="primary" />
            </span>
          </div>
          <div className="btn">
            <span>Secondary</span>
            <span>
              <Button type="secondary" />
            </span>
          </div>
          <div className="btn">
            <span>Error</span>
            <span>
              <Button type="error" />
            </span>
          </div>
          <div className="btn">
            <span>Success</span>
            <span>
              <Button type="success" />
            </span>
          </div>
        </div>
        <hr />
        <div className="alert-components-section">
          <Alert type="error"/>
          <Alert type="warning"/>
          <Alert type="info"/>
          <Alert type="success"/>
        </div>
      </div>
    </div>
  );
}

export default App;
