// (A) ASYNC ADD
async function add (first, second) {
    return first * second;
  }
   
  // (B) RUN ASYNC FUNCTION
  add(2, 4)
   
  // (C) THEN RESOLVE RESULT ON COMPLETE
  .then((result) => { console.log("RES:",result); })
   
  // (D) OPTIONAL - CATCH ERRORS
  .catch((err) => { console.log("ERR: ",err); })
   
  // (E) OPTIONAL - FINALLY
  .finally(() => { console.log("Finally"); });