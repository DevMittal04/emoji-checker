import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😍": "loving it",
  "❤": "love",
  "😎": "smart",
  "😁": "grin",
  "😂": "lol",
  "😢": "crying"
};
var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this in our Database";
    }
    setMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!</h1>
      <input onChange={emojiInputHandler} />

      <div
        style={{ fontSize: "2rem", marginTop: "1rem", fontWeight: "bolder" }}
      >
        {" "}
        {meaning}{" "}
      </div>

      <div>
        <h3>Emojis We know </h3>
        <ul>
          {knownEmojis.map(function (emoji) {
            return (
              <span
                key={emoji}
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}{" "}
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
