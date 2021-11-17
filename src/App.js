import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <main className="App">
        <Route path="/" exact>
          cvb
        </Route>
        
      </main>
    </Router>
  );
}

export default App;
