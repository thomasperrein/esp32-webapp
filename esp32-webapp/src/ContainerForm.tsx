import { Container } from "@mantine/core";
import { useState } from "react";
import SliderLEDIntensityAll from "./SliderLEDIntensityAll";
import { LEDVChooserValues } from "./constants";
import LEDChooser from "./LEDChooser";
import SliderUnique from "./SliderUnique";

function ContainerForm() {
  const demoProps = {
    h: 50,
    mt: "md",
  };

  const [selectedLEDOption, setSelectedLEDOption] = useState<LEDVChooserValues>(
    LEDVChooserValues.AllLEDs
  );

  const handleLEDChange = (value: LEDVChooserValues) => {
    setSelectedLEDOption(value);
  };

  return (
    <>
      <Container size="xs" {...demoProps}>
        <LEDChooser
          selectedValue={selectedLEDOption}
          onLEDChange={handleLEDChange}
        />
        {selectedLEDOption === LEDVChooserValues.AllLEDs && (
          <SliderLEDIntensityAll />
        )}
        {selectedLEDOption === LEDVChooserValues.EachLED && <SliderUnique />}
      </Container>
    </>
  );
}

export default ContainerForm;
