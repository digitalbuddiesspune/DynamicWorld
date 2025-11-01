import React, { useEffect, useState } from "react";
import UniversityStrip from "./UniversitityStrip";
import DynamicUniversity from "./DynamicUniversity";
import axios from "axios";
const MVOC02 = () => {
  const api = import.meta.env.VITE_BACKEND_API;
  const [isLoading, setIsLoading] = useState(true);
  const [MVOC, setMVOC] = useState([]);
  const handleApi = async () => {
    try {
      const { data } = await axios.get(`${api}/mvoc-programs`);
      setMVOC(data.data);
    } catch (error) {
      console.error("Error fetching MVOC programs:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);
  return (
    <div className="min-h-screen   text-white">
      <UniversityStrip />

      {isLoading ? (
        <p className="text-center mt-10">Loading...</p>
      ) : (
        <DynamicUniversity university={MVOC} />
      )}

    
    </div>
  );
};

export default MVOC02;
