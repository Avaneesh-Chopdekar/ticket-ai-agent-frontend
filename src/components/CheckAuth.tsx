import React, { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckAuth({
  children,
  isProtected = false,
}: {
  children: ReactNode;
  isProtected?: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isProtected) {
      if (!token) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    } else {
      if (token) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  }, [navigate, isProtected]);

  if (loading) return <div>Loading...</div>;

  return children;
}
