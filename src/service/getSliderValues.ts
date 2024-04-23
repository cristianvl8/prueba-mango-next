export async function getSliderValues() {
    try {
      const response = await fetch('http://localhost:3001/exercise1');
      if (!response.ok) {
        return {values: { min: 40, max: 70 }};
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return {values: { min: 40, max: 70 }};
    }
}