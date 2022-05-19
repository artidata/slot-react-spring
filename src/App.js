import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 }
  });

  return (
    <>
      <button>spin</button>
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
