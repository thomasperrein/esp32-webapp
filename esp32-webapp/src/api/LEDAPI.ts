const API_URL = "http://rrrr" //mettre ici l'adresse du ESP32

export const updateLEDS = async (brightness: number) => {
  try {
    const response = await fetch(`${API_URL}/update_all_leds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/content-type",
      },
      body: JSON.stringify({
      brightness: brightness,
    }),
    });
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: Échec de la mise à jour des LEDs`);
    }

    console.log("LEDs updated");
  } catch (error) {
    console.error("Une erreur est survenue :", error);
    throw error; 
  }
};


export const updateLEDById = async (brightness: number, id:number) => {
  try {
    const response = await fetch(`${API_URL}/update_leds/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/content-type",
      },
      body: JSON.stringify({
      brightness: brightness,
    }),
    });
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: Échec de la mise à jour de la LED id : ${id}`);
    }

    console.log("LED updated");
  } catch (error) {
    console.error("Une erreur est survenue :", error);
    throw error; 
  }
};