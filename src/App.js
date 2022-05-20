import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const colors = ["#5778a4", "#e49444", "#d1615d", "#85b6b2", "#6a9f58"];

export default function App() {
  const [keys, setKeys] = useState([0, 1, 2, 3, 4]);
  const [spin, set] = useState(false);
  const end = useRef(0);
  const styles = useSpring({
    to: { x: end.current },
    config: { duration: 1000 }
  });

  const handleSpin = () => {
    setKeys((prev) => Array.from(Array(10), (_, x) => x - 9 + prev[4]));
    set(!spin);
    end.current = end.current + 400;
  };

  return (
    <>
      <button onClick={handleSpin}>spin</button>
      <div style={{ width: 400, overflow: "clip" }}>
        <animated.div style={{ position: "relative", height: 80, ...styles }}>
          {keys.map((val) => (
            <div
              key={val}
              style={{
                position: "absolute",
                width: 76,
                height: 76,
                top: 2,
                left: val * 80 + 2,
                backgroundColor: colors.at(val % 5),
                borderRadius: 10
              }}
            />
          ))}
        </animated.div>
      </div>
    </>
  );
}
