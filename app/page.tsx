"use client";

import BookCard from "./components/BookCard";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="container-lg">
      <Hero/>
      <BookCard />
    </div>
  );
}
