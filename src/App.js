import React, { useState } from "react";

import image1 from "./assets/1.jpg";
import Title from "./assets/title.png";
import Card from "./Card";

const messageList = [
  {
    photo: image1,
    name: "Noy",
    date: "8/8/20",
    time: "20:30",
    message:
      "חלעמחלךדכ געיכדגחעידךחגעכשלךגחכלך חכךלשחכלדחשכךלחדחשכיחיגשעיהילנלחגדנכל שיםוכידשגעעעעעעעעעעעעעעעעעעעעעעעעעעע עעעעעייייייייייי יייייייייייייי",
  },
  {
    photo: image1,
    name: "Nofar",
    date: "7/6/20",
    time: "20:20",
    message:
      "חלעמחלךדכגעיכדגחעיד ךחגעכשלךגחכלךחכךלשחכלדחשכךלח דחשכיחיגשעיהילנלחגדנכלשיםוכ ידשגעעעעעעעעעעעעעעעעעעעעע עעעעעעעעעעעייייייייייייייייייי יייייי",
  },
  {
    photo: image1,
    name: "Gila",
    date: "8/3/20",
    time: "19:30",
    message:
      "חלעמחלךדכגעיכ דגחעידךחגעכשלךגחכלךחכ ךלשחכלדחשכךלחדחשכיחיגשעיהילנלחגדנכלשיםוכידשגע עעעעעעעעעעעעעעעעעעעעעעעעעעע עעעייייייייייייייייייייייייי",
  },
  {
    photo: image1,
    name: "Roi",
    date: "1/8/20",
    time: "12:30",
    message:
      "חלעמחלךדכגעיכדגחעידךחגעכשלך גחכלךחכךלשחכלדחשכךלחדחשכיחיגש עיהילנלחגדנכלשיםוכידשגעעע עעעעעעעעעעעעעעעעעעעעעעעעע עעעעייייייייייייייייייייייייי",
  },
  {
    photo: image1,
    name: "Gil",
    date: "8/3/20",
    time: "20:12",
    message:
      "חלעמחלךדכגעיכדגחעידךחג עכשלךגחכלךחכךלשח כלדחשכךלחדחשכיחי גשעיהילנלחגד נכלשיםוכידשגעעעעע עעעעעעעעעעעעעעעעעע עעעעעעעעעייייייייייייייייייייייייי",
  },
  {
    photo: image1,
    name: "Uri",
    date: "8/8/20",
    time: "20:30",
    message:
      "חלעמחלךדכגעיכדגחעידךחגעכשלךגחכלךחכךלשחכ לדחשכךלחדחשכיחיגשעיהילנלחגדנכ לשיםוכידשגעעעעעעעעעעעעעעעעעע עעעעעעעעעעעעעעייייייייייייייייייייייייי",
  },
  {
    photo: image1,
    name: "Ron",
    date: "8/2/20",
    time: "20:30",
    message:
      "היי דכדגכדכדחיכךדיכךדחכךלחדךלכחדחשךףחכךלדגחכר ואי'חלעמחלךדכגעיכדגחעידךחגעכשלךגחכלךחכךלשחכל דחשכךלחדחשכיחיגשעיהילנלחגדנכלשיםוכידש",
  },
  {
    photo: image1,
    name: "Stav",
    date: "8/8/20",
    time: "20:30",
    message:
      "היי דכדגכדכדחי כךדיכךדחכךלחדךלכחדחשךף חכךלדגחכרו אי'חלעמחלךדכגעיכדגחעידךחגעכשלךג חכלךחכךלשחכלדחשכךלחדחשכ יחיגשעיהי לנלחגדנכלשיםוכידש",
  },
  {
    photo: image1,
    name: "Ben",
    date: "8/8/20",
    time: "20:30",
    message:
      "חלעמחלךדכגעי כדגחעידךחגעכש לךגחכלך חכךלש חכלדחש כךלח דחשכ יחיגש עיהיל לחגדנכ שיםו געע עעעעעע עע עע עעעעעעעעע ייייי ייייייייי ייייייייייי",
  },
  {
    photo: image1,
    name: "Zevik",
    date: "8/8/20",
    time: "20:30",
    message:
      "חלעמחלךדכגעיכדגחעיד ךחגעכשלךגחכלךחכךלשחכלדחשכךלחדחשכיחיגשע יהילנלחגדנכלשיםוכידשגעעעעעעעעעעעעעעעעעעע עעעעעעעעעעעעעייייייייייייייייייייייייי",
  },
];

function App() {
  const initItems = messageList.slice(0, 3);
  const [messages, setMessages] = useState(initItems);
  const [renderItem, setRenderItem] = useState(3);
  const [isWheel, setWheel] = useState(false);

  const wheel = (e) => {
    //if whell up nothing should happen
    if (e.nativeEvent.wheelDelta > 0) {
    } else {
      setWheel(true);
      setTimeout(function () {
        setWheel(false);
      }, 1000);

      if (renderItem < 10) {
        //copy the render item state
        let newRenderItem = renderItem;
        //adds 1 to the copy of render item
        newRenderItem += 1;
        //setting new state
        setRenderItem(newRenderItem);

        //copy the list last state
        const newlist = messages;
        //pusing the new item to the start of the list
        newlist.unshift(messageList[renderItem]);
        //removing the last item from the list
        newlist.pop(messages.length);
        //setting the new state
        setMessages(newlist);
      } else {
        setRenderItem(0);
      }
    }
  };

  const onDelete = () => {};

  return (
    <div className="App">
      <header className="cover-title">
        <img style={{ backgroundSize: "cover" }} src={Title} alt=""></img>
      </header>

      <div className="cards-container" onWheel={(e) => wheel(e)}>
        {messages
          ? messages.map((item, index) => (
              <Card
                photo={item.photo}
                name={item.name}
                date={item.date}
                time={item.time}
                message={item.message}
                key={index}
                index={index}
                wheel={isWheel}
                // className={index === 2 ? "last-child" : ""}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
