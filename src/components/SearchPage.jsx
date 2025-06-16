'use client';
import React, { useState } from "react";
import Hero from "./Hero";
import JobResults from "./JobResults";

const SearchPage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (newTitle, newLocation) => {
    setTitle(newTitle);
    setLocation(newLocation);
    setHasSearched(true);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      {hasSearched && <JobResults title={title} location={location} />}
    </>
  );
};

export default SearchPage;



