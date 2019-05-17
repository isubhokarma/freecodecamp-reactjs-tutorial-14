import React from "react";
import AppCards from "./AppCards";

const App = () => {
  return (
    <div className="container">
      <AppCards
        card={{
          imgUrl:
            "https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg",
          phone: "123456789",
          title: "Debo is idiot",
          about: "And I don't like him"
        }}
      />
      <AppCards
        card={{
          imgUrl: "https://i.ytimg.com/vi/b9faeP_8KJA/maxresdefault.jpg",
          phone: "123456789",
          title: "Shubham is stupid",
          about: "But I do like him"
        }}
      />
    </div>
  );
};

export default App;

//note: when you need to parse multiple json data with many parseId as object.. you need to use props.someVar.theParseId
