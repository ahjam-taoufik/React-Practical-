import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const Component = () => {
  return (
    <div>
      <Tippy content="Hello I am tooltip">
        <button>My button</button>
      </Tippy>
    </div>
  );
};

export default Component;
