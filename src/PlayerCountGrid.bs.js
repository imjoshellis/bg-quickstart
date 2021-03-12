// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as FramerMotion from "framer-motion";

function PlayerCountGrid$CountButton(Props) {
  var num = Props.num;
  var setCount = Props.setCount;
  var whileHover = {
    backgroundColor: "#CCD5E1",
    scale: 1.05
  };
  var whileTap = {
    backgroundColor: "#EDF2F7",
    scale: 1.05
  };
  var onClick = function (param) {
    return Curry._1(setCount, (function (param) {
                  return num;
                }));
  };
  return React.createElement(FramerMotion.motion.div, {
              children: num,
              whileHover: whileHover,
              whileTap: whileTap,
              onClick: onClick,
              className: "px-8 py-8 text-xl font-bold text-gray-900 bg-gray-600 rounded-lg shadow-lg cursor-pointer"
            });
}

var CountButton = {
  make: PlayerCountGrid$CountButton
};

function PlayerCountGrid(Props) {
  var setCount = Props.setCount;
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "grid grid-cols-3 gap-4"
                }, Belt_Array.map(Belt_Array.range(2, 10), (function (n) {
                        return React.createElement(PlayerCountGrid$CountButton, {
                                    num: n,
                                    setCount: setCount,
                                    key: String(n)
                                  });
                      }))));
}

var make = PlayerCountGrid;

export {
  CountButton ,
  make ,
  
}
/* react Not a pure module */