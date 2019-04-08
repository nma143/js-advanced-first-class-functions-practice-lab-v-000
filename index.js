// Code your solution in this file!
function logDriverNames(drivers)
{
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}
function logDriversByHometown(drivers, location)
{
  drivers.forEach(function(driver)
  {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  });
}
function driversByRevenue(drivers)
{
  const revenueSorter = function compareRevenu(driver1, driver2)
  {
    return driver1.revenue - driver2.revenue;
  };

  drivers.sort(revenueSorter);
}
