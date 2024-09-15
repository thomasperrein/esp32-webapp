import { Container, Box } from "@mantine/core";
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
        {/* Wrapper Box for centering and spacing */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px", // Spacing between elements
            marginTop: "20px", // Optional: adjust to your needs
          }}
        >
          {/* Centered LEDChooser */}
          <LEDChooser
            selectedValue={selectedLEDOption}
            onLEDChange={handleLEDChange}
          />

          {/* Conditional Rendering of Sliders with margins */}
          {selectedLEDOption === LEDVChooserValues.AllLEDs && (
            <SliderLEDIntensityAll />
          )}
          {selectedLEDOption === LEDVChooserValues.EachLED && <SliderUnique />}
        </Box>
      </Container>
    </>
  );
}

export default ContainerForm;
