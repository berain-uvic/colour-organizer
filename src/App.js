import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
