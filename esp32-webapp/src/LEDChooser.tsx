import { Radio, Group } from "@mantine/core";
import { LEDVChooserValues } from "./constants";

export interface LEDChooserProps {
  selectedValue: LEDVChooserValues;
  onLEDChange: (value: LEDVChooserValues) => void;
}

function LEDChooser({ selectedValue, onLEDChange }: LEDChooserProps) {
  return (
    <Group style={{ mb: "mt" }}>
      <Radio
        checked={selectedValue === LEDVChooserValues.AllLEDs}
        label="All LEDs"
        value={LEDVChooserValues.AllLEDs}
        onChange={() => onLEDChange(LEDVChooserValues.AllLEDs)}
      />
      <Radio
        checked={selectedValue === LEDVChooserValues.EachLED}
        label="Each LED"
        value={LEDVChooserValues.EachLED}
        onChange={() => onLEDChange(LEDVChooserValues.EachLED)}
      />
    </Group>
  );
}

export default LEDChooser;
