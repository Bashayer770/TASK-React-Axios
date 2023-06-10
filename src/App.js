import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { Route, Routes } from "react-router-dom";
import { Addpet } from "./API";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="font-mono">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/pets/:petId" element={<PetDetail />} />
          <Route path="/addpets" element={<Addpet />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
