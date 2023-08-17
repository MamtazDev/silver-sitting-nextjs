export function formatDate(dateString) {
    // Parse the date string into a Date object
    const date = new Date(dateString);
    
    // Array of month names
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Extract the components of the date
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    // Construct the formatted date string
    return [`${day}`, `${month} ${year}`];
  }
  
//   // Test the function with your date string
//   const formattedDate = formatDate("2023-08-11T23:58:42.228Z");
//   console.log(formattedDate); // Output: "11 August 2023"