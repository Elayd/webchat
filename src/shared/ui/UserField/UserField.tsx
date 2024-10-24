import { ChangeEvent, useState } from "react";

interface IUserField {
  label: string;
  value: string;
  editable?: boolean;
  inputRef?: (item: HTMLInputElement | null) => void;
}
export const UserField = (props: IUserField) => {
  const { label, value, editable = false, inputRef } = props;
  const [editValue, setEditValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <div
      className={`flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 ${
        editable ? "border-b border-solid border-gray-500" : ""
      }`}
    >
      <span className="text-white">{label}</span>
      {editable ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={handleInputChange}
          className="bg-gray-700 text-blue-500 border-none outline-none"
        />
      ) : (
        <span className="text-blue-500">{editValue}</span>
      )}
    </div>
  );
};
