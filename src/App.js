import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const colors = ["#a6cee3", "#b2df8a", "#fb9a99", "#fdbf6f", "#cab2d6"];

export default function App() {
  const [keys, setKeys] = useState([0, 1, 2, 3, 4]);
  const [spin, set] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const end = useRef(0);
  const styles = useSpring({
    to: { x: end.current },
    config: { duration: 1600 },
    onRest: () => setDisabled(false)
  });

  const handleSpin = () => {
    const rand = Math.ceil(Math.random() * 5);
    setKeys((prev) =>
      Array.from(Array(15 + rand), (_, x) => x - (14 + rand) + prev[4])
    );
    set(!spin);
    setDisabled(true);
    end.current = end.current + 800 + rand * 80;
  };

  return (
    <>
      <button disabled={disabled} onClick={handleSpin}>
        spin
      </button>
      <div style={{ width: 400, overflow: "clip" }}>
        <animated.div style={{ position: "relative", height: 80, ...styles }}>
          {keys.map((val) => (
            <div
              key={val}
              style={{
                position: "absolute",
                width: 70,
                height: 70,
                top: 5,
                left: val * 80 + 5,
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
