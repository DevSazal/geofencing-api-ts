import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  let randomTrueOrFalse = Math.random() >= 0.5;
  let status : string;
  let msg : string;
  let latitude, longitude, altitude;

  latitude = req.body.latitude;
  longitude = req.body.longitude;
  altitude = req.body.altitude;

  // Implement Geofencing algorithm

  if (!latitude || !longitude || !altitude) {
    return res.status(400).json({
      message: "data invalid!",
    });
  }

  if (randomTrueOrFalse) {
    status = "safe";
    msg = "have a safe journey";
  } else {
    status = "danger";
    msg = "something wrong! please don't fly";
  }

  return res.status(200).json({
    status: 200,
    message: "Data retrieved",
    data: {
      status: status,
      message: msg,
      loc: {
        latitude: latitude,
        longitude: longitude,
        altitude: altitude,
      },
    },
  });
});

export { router };
