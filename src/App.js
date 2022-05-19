import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const [spin, set] = useState(false);
  const styles = useSpring({
    to: { x: spin ? 100 : 0 },
    config: { duration: 1000 }
  });

  const handleSpin = () => {
    set(!spin);
  };

  return (
    <>
      <button onClick={handleSpin}>spin</button>
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "red",
          borderRadius: 10,
          ...styles
        }}
      />
    </>
  );
}
