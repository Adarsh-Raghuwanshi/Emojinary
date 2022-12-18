import { useState } from "react";
import "./styles.css";

export default function App() {
  let emojiDictionary = {
    "😕": "Confused face",
    "😞": "Disappointed face",
    "😟": "Worried face",
    "🤩": "Star-Struck face",
    "😉": "Winking face",
    "😊": "Smiling face",
    "🤗": "Hugging face",
    "👍": "Thumbs Up",
    "😴": "Sleeping face",
    "❤️": "Love",
    "😑": "Annoyance face",
    "😒": "Unamused face",
    "😋": "Yum",
    "🤔": "Thinking face",
    "🤫": "Shushing face"
  };
  let emojinary = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState(
    "Emojis meaning will be displayed here"
  );
  const [inputEmoji, setInputEmoji] = useState("");

  function emojiOutputHandler(evt) {
    setInputEmoji(evt.target.value);
    let emojiMeaning = emojiDictionary[evt.target.value];
    if (emojiMeaning === undefined) {
      setMeaning("This is not available in our dictionary!");
    } else {
      setMeaning(emojiMeaning);
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
    setInputEmoji(emoji);
  }

  function outputClr() {
    if (meaning === "Emojis meaning will be displayed here") {
      return "black";
    } else if (meaning === "This is not available in our dictionary!") {
      return "red";
    }
    return "#c853f3";
  }

  return (
    <div className="App">
      <header>Emojinary!</header>

      <section>
        <input
          placeholder="Enter emoji here or choose from give below"
          onChange={emojiOutputHandler}
          value={inputEmoji}
        />
        <h3 style={{ color: outputClr() }}>{meaning}</h3>
        <h4>--&nbsp;Available emojis in dictionary&nbsp;--</h4>
        <div>
          {emojinary.map((item) => (
            <span key={item} onClick={() => emojiClickHandler(item)}>
              {" "}
              {item}{" "}
            </span>
          ))}
        </div>
      </section>

      <footer>
        <p>
          Do you also find hard to figure out meaning of emojis? So here is
          emoji dictionary for you, wherein you can enter emoji and we will tell
          you its meaning in seconds!
        </p>
      </footer>
    </div>
  );
}
