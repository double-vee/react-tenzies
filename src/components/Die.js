export default function Die({ value, isHeld, hold }) {
  return (
    <div className={isHeld ? "die die--match" : "die"} onClick={hold}>
      <h2 className="die__number">{value}</h2>
    </div>
  );
}
