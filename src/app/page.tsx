import React from "react";
import Header from "./_components/header/Header";
import Main from "./_components/main/Main";
import Footer from "./_components/footer/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-background transition-bg duration-500 ease-in-out">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
