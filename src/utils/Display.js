import { Dimensions } from "react-native";

const { height, widht } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidht = (w) => (widht / 100) * w;

export default { setHeight, setWidht };
