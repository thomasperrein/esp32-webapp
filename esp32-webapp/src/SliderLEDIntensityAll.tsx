import { Slider } from "@mantine/core";

function SliderLEDIntensityAll() {
  return (
    <Slider
      color="blue"
      marks={[
        { value: 20, label: "20%" },
        { value: 50, label: "50%" },
        { value: 80, label: "80%" },
      ]}
    />
  );
}

export default SliderLEDIntensityAll;
