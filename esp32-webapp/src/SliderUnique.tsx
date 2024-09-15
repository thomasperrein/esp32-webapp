import { Slider } from "@mantine/core";
import "./SliderUnique.css";

function SliderUnique() {
  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      <h3 className="title">LED 1</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <h3 className="title">LED 2</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <h3 className="title">LED 3</h3>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
      <h3 className="title">LED 4</h3>
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

export default SliderUnique;
