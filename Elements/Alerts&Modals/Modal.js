import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import Btn from "../Buttons/Btn";

const ShowModal = ({ open = false, buttons, title, close = true, modalAttr, setModal, ...props }) => {
  const [isOpen, setIsOpen] = useState(open);
  const { t } = useTranslation("common");
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <Modal id="staticBackdrop" isOpen={isOpen} centered className={`theme-modal theme-form ${modalAttr?.className}`} toggle={() => {
      setIsOpen(false); setModal && setModal(false);
    }}>
      {close && (
        <ModalHeader
          toggle={() => {
            setIsOpen(false); setModal && setModal(false);
          }}>
          {title && (title === "success" ? t("success") : title === "fail" ? t("Oops!") : t(title))}
        </ModalHeader>
      )}
      {!close && title && <ModalHeader>{title === "success" ? "success" : title === "fail" ? "Oops!" : t(title)}</ModalHeader>}
      <ModalBody>{props.children}</ModalBody>
      {(buttons) && (
        // {(close || buttons) && (
        <ModalFooter>
          {/* {close && <Btn title="Cancel" onClick={() => setIsOpen(false)} />} */}
          <div className="button-box">{buttons}</div>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default ShowModal;
