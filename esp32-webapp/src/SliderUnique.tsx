import { Slider } from "@mantine/core";

function SliderUnique() {
  return (
    <>
      <h3>LED 1</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <h3>LED 2</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <h3>LED 3</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <h3>LED 4</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </>
  );
}

export default SliderUnique;
