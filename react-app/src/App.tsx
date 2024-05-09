import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchModal from "./components/SearchModal";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = ()=>{
    setIsModalOpen(true);
  }
  const handleCloseModal = ()=>{
    setIsModalOpen(false);
  }
  

  return (
    <div className="flex flex-col min-h-[100vh]">
    <Header toggleModal={handleOpenModal} />
    <SearchModal visibility={isModalOpen} closeModal={handleCloseModal} />
    <main className="flex-1 relative">
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default App