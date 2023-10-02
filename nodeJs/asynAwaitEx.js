function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  async function printInSequence() {
    console.log('a');
    console.log('b');
    
    await delay(3000);
    console.log('c');
    
    await delay(0);
    console.log('d');
    
    console.log('e');
  }
  
  printInSequence();