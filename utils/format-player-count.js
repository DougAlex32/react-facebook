export default function formatPlayerCout(count) {
    const million = 1000000;
    const thousand = 1000;
  
    if (count >= million) {
        const formattedCount = (count / million).toFixed(1);
        return formattedCount.endsWith('.0') ? formattedCount.slice(0, -2) + 'm' : formattedCount + 'm';
      } else if (count >= thousand) {
        const formattedCount = (count / thousand).toFixed(1);
        return formattedCount.endsWith('.0') ? formattedCount.slice(0, -2) + 'k' : formattedCount + 'k';
      } else {
        return count.toString();
      }
    };