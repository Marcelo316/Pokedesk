let db;

window.onload = function(){
  let request = window.indexedDB.open('pokemon_names',1);

  // Request callbacks

  request.onerror = function(){
    //console.log("Database failed to open");
  }

  request.onsuccess = function(){
    //console.log("Database opened successfully");

    db = request.result;
  }

  request.onupgradeneeded = function(e){
    let db = e.target.result;
    let objectStore = db.createObjectStore('pokemon_names',{ keyPath: 'id', autoIncrement:false});

    objectStore.createIndex('name','name',{unique:false});
    objectStore.createIndex('id','id',{unique:true});

    //console.log('Database setup complete');
  }

  //----------
  //Operations
  //----------

  // Create
  function addData(pokemon){
      let newItem = pokemon.name;
      let transaction = db.transaction(['pokemon_names'],'readwrite');
      let objectStore = transaction.objectStore('pokemon_names');

      let request = objectStore.add(newItem);
      request.onsuccess = function(){
        //console.log('Item added successfully');
      };

      transaction.oncomplete = function() {
          //console.log('Transaction completed: database modification finished.');
        };
      
        transaction.onerror = function() {
          //console.log('Transaction not opened due to error');
      };
  }

  // Read
  function deleteItem(pokemon) {

    let transaction = db.transaction(['pokemon_names'], 'readwrite');
    let objectStore = transaction.objectStore('pokemon_names');
    let request = objectStore.delete(pokemon.id);
  
    transaction.oncomplete = function() {
      //console.log('Pokemon ' + pokemon.id + ' deleted.');
    };
  }

  function count(db){
      let objectStore = db.transaction(['notes_os'],'readonly').objectStore('notes_os');
      
      let count = objectStore.count();
      count.onsuccess = function(){
          //console.log("Contagem: " + count.result);
      };
  }
}