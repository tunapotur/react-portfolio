function SpeechBubble({ speek }) {
  return (
    <div className="absolute -top-[12rem] left-[5rem]">
      <p className="bubble thought">{speek}</p>
    </div>
  );
}

export default SpeechBubble;
