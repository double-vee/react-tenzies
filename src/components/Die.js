export default function Die({ value, isHeld }) {
  return (
    <div className={isHeld ? "die die--match" : "die"}>
      <h2 className="die__number">{value}</h2>
    </div>
  );
}
