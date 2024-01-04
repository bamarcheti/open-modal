import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";

interface ConfigModalProps {
  onClose: () => void;
  isOpen: boolean;
  modalTitle: string;
  description: string;
}

const Modal = ({
  isOpen,
  modalTitle,
  description,
  onClose,
}: ConfigModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex overflow-y-auto overflow-x-hidden fixed top-4 z-50 justify-center items-center h-full md:h-full inset-0">
              <div className="relative flex justify-center items-center px-4 w-full max-w-2xl h-auto mx-3">
                <div className="relative bg-white rounded-lg shadow w-full sm:w-3/5 ">
                  <div className="flex flex-col items-start p-4 rounded-t border-b">
                    <span className="text-xl font-bold text-gray-title lg:text-2xl">
                      {modalTitle}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-base font-medium text-gray-title lg:text-2xl">
                      {description}
                    </span>
                  </div>

                  <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
                    <Button variant="primary" onClick={onClose}>
                      Fechar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
