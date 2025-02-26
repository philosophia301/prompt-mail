import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Upload from "./Upload";
import Prompt from "./Prompt";
import Loading from "./Loading";
import Result from "./Result";

function App() {
  const [currentPage, setCurrentPage] = useState("hero");

  return (
    <div className="w-[100vw] h-[100vh] flex flex-1 flex-col">
      <Header setCurrentPage={setCurrentPage} />
      <div className="flex flex-1 w-[80%] max-w-[960px] mx-auto">
        {currentPage === "hero" && <Hero setCurrentPage={setCurrentPage} />}
        {currentPage === "upload" && <Upload setCurrentPage={setCurrentPage} />}
        {currentPage === "prompt" && <Prompt setCurrentPage={setCurrentPage} />}
        {currentPage === "loading" && (
          <Loading setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "result" && <Result setCurrentPage={setCurrentPage} />}
      </div>
    </div>
  );
}

export default App;
