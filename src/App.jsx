import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import { Toaster } from "sonner";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ViewNotes from "./pages/ViewNotes";
import AddNotes from "./pages/AddNotes";
import UpdateNotes from "./pages/UpdateNotes";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/note/:id" element={<ViewNotes />} />
      <Route path="/note/update/:id" element={<UpdateNotes />} />
      <Route path="/note/add" element={<AddNotes />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}>
      {/* <Toaster position="bottom-right" richColors /> */}
    </RouterProvider>
  );
};

export default App;
