"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenNewOrUpdateDirectoryModal] = useState(false);

  const handleOpenModal = () => {
    console.log("foi");

    setOpenNewOrUpdateDirectoryModal(true);
  };

  return (
    <main className="h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-3 items-center text-secondary">
          <h1 className="font-bold">Olá!</h1>
          <h2>Clique no botão para abrir a modal.</h2>
        </div>
        <div className="flex">
          <Button variant="primary" onClick={() => handleOpenModal()}>
            Abrir
          </Button>
        </div>
        <Modal
          modalTitle="Olá!"
          description="Está é a modal aberta"
          isOpen={openModal}
          onClose={() => setOpenNewOrUpdateDirectoryModal(false)}
        />
      </div>
    </main>
  );
}
