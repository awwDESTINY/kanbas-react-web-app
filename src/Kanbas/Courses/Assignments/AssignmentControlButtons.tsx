import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlusLg } from "react-icons/bs";

export default function GradesControlButtons() {
  return (
    <div className="float-end">
        40% of Total
        <BsPlusLg />
        <IoEllipsisVertical className="fs-4" />
    </div>
    
);
}
