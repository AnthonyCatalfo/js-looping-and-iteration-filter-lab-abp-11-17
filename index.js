// Code your solution in this file
function findMatching(drivers, name){
 return drivers.filter(function (driver) { return name.toLowerCase()===driver.toLowerCase(); });
}
function fuzzyMatch(drivers, nameBeginsWith) {
  return drivers.filter(function (driver) { return nameBeginsWith===driver.startsWith(nameBeginsWith, 0); });

}
