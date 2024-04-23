export async function getSliderFixedValues() {
    try {
      const response = await fetch('http://localhost:3001/exercise2');
      if (!response.ok) {
        return {rangeValues: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99]}
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return {rangeValues: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99]}
    }
}