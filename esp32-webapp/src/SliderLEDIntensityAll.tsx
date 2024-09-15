import { Slider } from "@mantine/core";

function SliderLEDIntensityAll() {
  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      <Slider
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
