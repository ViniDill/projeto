import { useState } from "react";
const useKitlist = () => {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading,
  };
};

export default useKitlist;
