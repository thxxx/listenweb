import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Listen = () => {
  const router = useRouter();
  const [audioId, setAudioId] = useState("");

  useEffect(() => {
    console.log(router.query);
    if (router.query) {
      if (router.query.audioId) {
        setAudioId(router.query.audioId as string);
      }
    }
  }, [router.query]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <h1>Play Audio File</h1>
      <br />
      {audioId && (
        <audio controls>
          <source src={audioId} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default Listen;
