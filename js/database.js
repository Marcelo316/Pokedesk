var db;
var request = indexedDB.open("DBteste");
request.onerror = function(event) {
  alert("Database error: " + event.target.errorCode);
};
request.onsuccess = function(event) {
  db = request.result;
};