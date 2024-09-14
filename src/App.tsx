import "./App.css";
import Footer from "./components/blocks/Footer";
import Header from "./components/blocks/Header";
import Sidebar from "./components/blocks/Sidebar";

function App() {
  return (
    <>
      <div className="h-[95%] flex flex-row">
        <div className="h-full w-4/12 md:w-4/12 lg:w-3/12 xl:w-2/12  flex flex-col bg-slate-400">
          <Header />
          <Sidebar />
        </div>
        <div className="h-full w-8/12 md:w-8/12 lg:w-9/12 xl:w-10/12 bg-blue-600">
          Content
        </div>
      </div>
      <div className="h-[5%]">
        <Footer />
      </div>
    </>
  );
}

export default App;
