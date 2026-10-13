import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { FloatingDockBottom } from "../components/design/FloatingDock";
import { ComponentsShowcase } from "../components/ComponentsShowcase";
import Footer from "../components/Footer";

const ComponentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <FloatingDockBottom />
        <div className="container pt-8">
          <Link
            to="/"
            className="font-code text-xs uppercase tracking-wider text-gray-400 transition-colors hover:text-color-1"
          >
            ← Back to portfolio
          </Link>
        </div>
        <ComponentsShowcase />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ComponentsPage;
