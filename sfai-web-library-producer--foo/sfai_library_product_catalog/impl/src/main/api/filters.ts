const API_BASE = process.env.REACT_APP_SFAI_MKT_CATALOG_API_URL_FILTERS;

export const getBrands = async () => {
  try {
    const response = await fetch(`${API_BASE}/brands`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.brands || [];
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE}/categories`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getStates = async () => {
  try {
    const response = await fetch(`${API_BASE}/states`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.states || [];
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
};

export const getTransmissions = async () => {
  try {
    const response = await fetch(`${API_BASE}/transmissions`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.transmissions || [];
  } catch (error) {
    console.error("Error fetching transmissions:", error);
    return [];
  }
};

export const getFuels = async () => {
  try {
    const response = await fetch(`${API_BASE}/fuels`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.fuels || [];
  } catch (error) {
    console.error("Error fetching fuels:", error);
    return [];
  }
};

export const getColors = async () => {
  try {
    const response = await fetch(`${API_BASE}/colors`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.colors || [];
  } catch (error) {
    console.error("Error fetching colors:", error);
    return [];
  }
};

export const getLocations = async () => {
  try {
    const response = await fetch(`${API_BASE}/locations`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.locations || [];
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};
