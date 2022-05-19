import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const [spin, set] = useState(false);
  const end = useRef(0);
  const styles = useSpring({
    to: { x: end.current },
    config: { duration: 1000 }
  });

  const handleSpin = () => {
    set(!spin);
    end.current = end.current + 100;
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
