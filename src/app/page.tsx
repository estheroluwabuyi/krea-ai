import React from "react";
import Header from "./_components/header/Header";
import Main from "./_components/main/Main";
import Footer from "./_components/footer/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <div className="min-h-screen">
          <Header />
          <Main />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
