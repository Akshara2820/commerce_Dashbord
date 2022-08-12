import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card4 from "./components/card4";
import Card5 from "./components/card5";
import { FiChevronDown } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="bg-white shadow-lg rounded-lg p-10">
          <div className="md:flex justify-between">
            <div>
              <div className="text-start text-[24px] font-semibold text-gray-800">
                Welcome, Akshara Mishra!
              </div>
              <div className="text-gray-500">
                Check the latest state is your commerence dashbord overview.
              </div>
            </div>
            <div className="flex gap-4 border border-blue-600 rounded-lg p-2 text-blue-600 font-semibold">
              <button className=""> This week </button>
              <div>
                <FiChevronDown className="mt-3 font-semibold"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] p-10">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
        </div>
      </Layout>
    </div>
  );
}

export default App;
