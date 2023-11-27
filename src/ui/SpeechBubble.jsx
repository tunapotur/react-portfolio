function SpeechBubble({ speek }) {
  return (
    <div className="absolute -top-[9rem] left-[1rem] sm:-top-[11rem]">
      <p className="bubble thought">{speek}</p>
    </div>
  );
}

export default SpeechBubble;
