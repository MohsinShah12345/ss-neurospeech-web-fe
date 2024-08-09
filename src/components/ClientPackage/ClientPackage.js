import React from "react";
import "./ClientPackage.scss";
import { CardsHeader } from "../../common";
import Packages from "./Packages";
const ClientPackage = () => {
  return (
    <div>
      <CardsHeader />
      <Packages />
    </div>
  );
};

export default ClientPackage;
