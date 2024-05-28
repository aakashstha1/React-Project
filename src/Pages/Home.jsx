import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="p-[20px]">
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />

      {/* IntroPost */}
      <IntroPost />

      {/* Blog */}
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
