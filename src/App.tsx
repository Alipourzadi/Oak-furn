import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routers";

function App() {
  return (
    <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-zinc-900 dark:to-zinc-900 transition duration-500">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
