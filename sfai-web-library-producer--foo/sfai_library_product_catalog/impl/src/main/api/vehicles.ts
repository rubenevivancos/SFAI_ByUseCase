
const API_BASE = process.env.REACT_APP_SFAI_MKT_CATALOG_API_URL;


export const getVehicles = async () => {
    try {

      const response = await fetch(`${API_BASE}/vehicles`, {
        method: "GET",
        headers: {
          "User-Agent": "insomnia/11.0.2",
        },
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
  
      return (data || []).map((vehicle: any) => {
        const financing = vehicle.financiado != null;
        const state = vehicle.kilometraje > 0 ? "Usado" : "0km";

        return{
          id: vehicle.id,
          name: vehicle.modelo,
          brandId: 0,
          brand: vehicle.marca,
          year: vehicle.anio,
          version: vehicle.motor,
          price: vehicle.precio,
          mileage: vehicle.kilometraje,
          transmission: "",
          transmissionId: 0,
          fuel: vehicle.combustible,
          fuelId: 0,
          location: "",
          locationId: 0,
          financing: financing,
          state: state,
          stateId: 0,
          status: vehicle.estado,
          category: "",
          categoryId: 0,
          color: vehicle.color,
          colorId: 0,
          image: vehicle.urls_imagenes[0]
        };
      });

    } catch (error) {
      console.error("Error fetching vehicles:", error);
      return [];
    }
};