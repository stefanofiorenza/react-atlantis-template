import React from "react";
//Routes
import Routes from "./routes";
//Components
import { LoadingSuspense, LoadingOperation, RouterScroll } from "../components";
//Containers
import { Toastify } from "../Containers/toastify";
import { DialogBox } from "../Containers/dialog";
import { ThemeArea } from "../Containers/theme";

function App() {
  return (
    <RouterScroll>
      <ThemeArea>
        <React.Suspense fallback={<LoadingSuspense />}>
          <LoadingOperation />
          <Toastify />
          <DialogBox />
          <Routes />
        </React.Suspense>
      </ThemeArea>
    </RouterScroll>
  );
}

export default App;
