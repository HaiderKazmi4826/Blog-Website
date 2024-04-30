import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchModal from "./components/SearchModal";

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = ()=>{
    setIsModalOpen(true);
  }
  const handleCloseModal = ()=>{
    setIsModalOpen(false);
  }
  

  return (
    <>
    <Header toggleModal={handleOpenModal} />
    <SearchModal visibility={isModalOpen} closeModal={handleCloseModal} />
    </>
  )
}

export default App