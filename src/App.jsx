import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  return (
    <div className="main_container">
      <div className="header">
        <Header title="Assignment 6" />
      </div>
      <div className="container">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;