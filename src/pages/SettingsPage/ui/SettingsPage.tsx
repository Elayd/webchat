import { UserField } from "@/shared/ui/UserField/UserField";
import { Button } from "@/shared/ui/Button/button";
import { useCallback, useState } from "react";

import { Link } from "react-router-dom";

// МБ распилю потом, щас рано на слои
const SettingsPage = () => {
  const [editable, setEditable] = useState(false);
  const changeMode = () => {
    setEditable(true);
  };

  const saveChanges = () => {
    setEditable(false);
  };

  const handleInputRefCb = useCallback(
    (node: HTMLInputElement | null) => {
      if (node && editable) {
        node.focus();
      }
    },
    [editable]
  );

  return (
    <div className="h-full w-full bg-gray-800 flex justify-center">
      <div className="h-3/4 w-2/6 mt-10 border-2 border-solid border-gray-500 rounded-3xl flex flex-col items-center">
        <div className="w-full flex justify-between">
          <Link to="/chat">
            <Button
              size="lg"
              className=" bg-gray-700 border-b border-solid border-gray-500 mt-6 ml-6"
              onClick={!editable ? changeMode : saveChanges}
            >
              Back
            </Button>
          </Link>
          <Button
            size="lg"
            className=" bg-gray-700 border-b border-solid border-gray-500 mt-6 mr-6"
            onClick={!editable ? changeMode : saveChanges}
          >
            {!editable ? "Edit" : "Save"}
          </Button>
        </div>
        <h1 className="text-gray-400 flex mt-6 mb-6">Settings</h1>
        <div className="w-3/6 h-44 flex items-center bg-gray-700 rounded-xl flex-col p-6">
          <UserField
            inputRef={handleInputRefCb}
            label="Username"
            value="@Dmitrii"
            editable={editable}
          />
          <UserField label="Email" value="test@gmail.com" editable={editable} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
