import { useState, useRef } from "react";
import { Slider } from "@mantine/core";
import "./SliderUnique.css";
import { updateLEDById } from "./api/LEDAPI";
import { debounce } from "./utils";

const LEDS = [1, 2, 3, 4];

function SliderUnique() {
  const [ledValues, setLedValues] = useState<{ [key: number]: number }>({
    1: 50,
    2: 50,
    3: 50,
    4: 50,
  });

  const debouncedUpdateLEDById = useRef(
    debounce((brightness, ledId) => {
      updateLEDById(brightness, ledId);
    }, 300)
  ).current;

  const handleSliderChange = (brightness: number, ledId: number) => {
    setLedValues((prevValues) => ({
      ...prevValues,
      [ledId]: brightness,
    }));

    // Utiliser la version debounce de la fonction pour éviter trop d'appels
    debouncedUpdateLEDById(brightness, ledId);
  };

  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      {LEDS.map((ledId) => (
        <div key={ledId}>
          <h3 className="title">LED {ledId}</h3>
          <Slider
            value={ledValues[ledId]}
            color="blue"
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
            onChange={(value) => handleSliderChange(value, ledId)}
          />
        </div>
      ))}
    </div>
  );
}

export default SliderUnique;
