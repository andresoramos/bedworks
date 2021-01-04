const reviewApiCall = (rentalId) => {
  return new Promise((resolve, reject) => {
    fetch(`http://3.17.167.113:3001/api/airbnb.users/`)
      .then((response) => response.json())
      .then((reviews) => {
        console.log("reviews: ", reviews);
        let length = reviews.length;
        let cleanliness = 0;
        let communication = 0;
        let value = 0;
        let accuracy = 0;
        let checkIn = 0;
        let location = 0;
        for (let i = 0; i < reviews.length; i++) {
          cleanliness += reviews[i].cleanliness;
          communication += reviews[i].communication;
          value += reviews[i].value;
          accuracy += reviews[i].accuracy;
          checkIn += reviews[i].checkIn;
          location += reviews[i].location;
        }
        cleanliness = Math.ceil(cleanliness / length);
        communication = Math.ceil(communication / length);
        value = Math.ceil(value / length);
        accuracy = Math.ceil(accuracy / length);
        checkIn = Math.ceil(checkIn / length);
        location = Math.ceil(location / length);
        let average = Math.ceil(
          (cleanliness +
            communication +
            value +
            accuracy +
            checkIn +
            location) /
            6
        );
        resolve({
          reviews: reviews,
          currentReviews: reviews.slice(0, 7),
          average: 6,
          total: length,
          cleanliness: cleanliness,
          communication: communication,
          value: value,
          accuracy: accuracy,
          checkIn: 6,
          location: location,
        });
      })
      .catch((e) => {
        console.log("reviewapi error:", e);
        reject({ error: true });
      });
  });
};

export default reviewApiCall;
