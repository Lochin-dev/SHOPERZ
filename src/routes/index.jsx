import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layouts";

const index = memo(() => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
});

export default index;
