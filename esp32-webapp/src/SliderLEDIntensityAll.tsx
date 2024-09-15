import { Slider } from "@mantine/core";
import { useRef, useState } from "react";
import { updateLEDS } from "./api/LEDAPI";
import { rem, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { debounce } from "./utils";

function SliderLEDIntensityAll() {
  const [brightness, setBrightness] = useState(50);
  const [error, setError] = useState<string | null>(null);
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;

  const debouncedUpdateLEDS = useRef(
    debounce((brightness) => {
      updateLEDS(brightness);
    }, 300)
  ).current;

  const handleSliderChange = async (value: number) => {
    setBrightness(value);

    try {
      await debouncedUpdateLEDS(value);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Erreur lors de la mise à jour des LEDs. Veuillez réessayer.");
    }
  };

  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      {error && (
        <Notification icon={xIcon} color="red" title="Bummer!">
          Something went wrong : {error}
        </Notification>
      )}
      <Slider
        value={brightness}
        onChange={handleSliderChange}
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </div>
  );
}

export default SliderLEDIntensityAll;
