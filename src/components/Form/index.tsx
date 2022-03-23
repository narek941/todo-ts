import React, { useRef } from "react";
import "./Form.css";

interface FormProps {
  addHandler(title: string): void;
}

export const Form: React.FC<FormProps> = (props) => {
  //   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addHandler(ref.current!.value);
      ref.current!.value = "";
      //   console.log(title);
      //   setTitle("");
    }
  };
  return (
    <div className="form">
      <input
        placeholder="Todo"
        type="text "
        id="title"
        ref={ref}
        className="add_todo_input"
        // value={title}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};
