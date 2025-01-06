/*4. Task: Sorting Objects

Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

 */

const cars = {
  cars: [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Ford", model: "Focus", year: 2018 },
    { make: "Tesla", model: "Model 3", year: 2020 },
  ],
};

const sortCars = (carArr) => {
  const result = carArr.sort((a, b) => a.year - b.year);
  console.log(result);
};

sortCars(cars.cars);

// output

/*[
  { make: 'Honda', model: 'Civic', year: 2012 },
  { make: 'Toyota', model: 'Corolla', year: 2015 },
  { make: 'Ford', model: 'Focus', year: 2018 },
  { make: 'Tesla', model: 'Model 3', year: 2020 }*/
