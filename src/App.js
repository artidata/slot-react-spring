import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const colors = [
  "#5778a4",
  "#e49444",
  "#d1615d",
  "#85b6b2",
  "#6a9f58",
  "#e7ca60",
  "#a87c9f",
  "#f1a2a9",
  "#967662",
  "#b8b0ac"
];

export default function App() {
  const [spin, set] = useState(false);
  const end = useRef(0);
  const styles = useSpring({
    to: { x: end.current },
    config: { duration: 1000 }
  });

  const handleSpin = () => {
    set(!spin);
    end.current = end.current + 500;
  };

  return (
    <>
      <button onClick={handleSpin}>spin</button>
      <animated.div style={{ display: "flex", ...styles }}>
        {colors.map((val) => (
          <div
            key={val}
            style={{
              width: 80,
              height: 80,
              backgroundColor: val,
              borderRadius: 10
            }}
          />
        ))}
      </animated.div>
    </>
  );
}
