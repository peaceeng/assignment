import React from "react";
import { DaysOfWeek } from "./const";

const PickModal = ({ dates }) => {
  return (
    <table>
      <tr>
        {DaysOfWeek.map((day, index) => (
          <td key={`wday${index}`}>{day}</td>
        ))}
      </tr>
      <tbody>{dates}</tbody>
    </table>
  );
};

export default PickModal;
