import React from 'react'
import QRCode from "react-qr-code";
import useSWR from "swr";

export const QrCode = () => {

    const { data, error } = useSWR("/api/user", fetch);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="App">
    <QRCode value="+91 7582950550" size={200} />
  </div>
  )
}

