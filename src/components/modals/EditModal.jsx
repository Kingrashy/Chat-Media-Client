import React from "react";
import { BottomDivider, FullBackdrop, HeaderOne } from "../../lib";
import { IoClose } from "react-icons/io5";
import { useEditModal } from "../../hook";
import EditForm from "../form/EditForm";

const EditModal = () => {
  const editmodel = useEditModal();
  const body = (
    <div className="bg-white w-[400px] max-[700px]:w-[90%] shadow shadow-slate-600 rounded-md h-auto">
      <div className="flex justify-between p-[1rem]">
        <HeaderOne text="Edit" className="font-sofia text-[23px]" />
        <IoClose
          size={25}
          className="cursor-pointer"
          onClick={editmodel.onClose}
        />
      </div>
      <BottomDivider />
      <EditForm />
    </div>
  );
  return <FullBackdrop open={editmodel.isOpen} body={body} />;
};

export default EditModal;
