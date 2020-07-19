import { Appointment } from './appointment';

export const APPOINTMENTS: Appointment[] = [
  {
    idappointment: 1,
    reason: "Allergie",
    date: new Date('2017-05-03 14:21:09'),
    veterinary_nordinal: 5,
    petowner_idpetownerappoint: 1,
    pet_idpetappoint: 1,
    type: "red"
  },
  {
    idappointment: 2,
    reason: "patte cassée",
    date: new Date('2019-05-03 14:21:09'),
    veterinary_nordinal: 2,
    petowner_idpetownerappoint: 2,
    pet_idpetappoint: 2,
    type: "red"
  },
  {
    idappointment: 3,
    reason: "maladie 3",
    date: new Date('2018-06-03 14:21:09'),
    veterinary_nordinal: 3,
    petowner_idpetownerappoint: 3,
    pet_idpetappoint: 3,
    type: "black"
  },
  {
    idappointment: 4,
    reason: "Maladie 4",
    date: new Date('2020-07-03 14:21:09'),
    veterinary_nordinal: 4,
    petowner_idpetownerappoint: 4,
    pet_idpetappoint: 4,
    type: "black"
  },
  {
    idappointment: 5,
    reason: "Maladie 5",
    date: new Date('2020-08-03 14:21:09'),
    veterinary_nordinal: 5,
    petowner_idpetownerappoint: 5,
    pet_idpetappoint: 5,
    type: "yellow"
  },
  {
    idappointment: 6,
    reason: "Maladie 6",
    date: new Date('2020-09-03 14:21:09'),
    veterinary_nordinal: 6,
    petowner_idpetownerappoint: 6,
    pet_idpetappoint: 6,
    type: "yellow"
  },
  {
    idappointment: 7,
    reason: "Maladie 7",
    date: new Date('2020-10-03 14:21:09'),
    veterinary_nordinal: 7,
    petowner_idpetownerappoint: 7,
    pet_idpetappoint: 7,
    type: "pink"
  },
  {
    idappointment: 8,
    reason: "Maladie 8",
    date: new Date('2020-11-03 14:21:09'),
    veterinary_nordinal: 8,
    petowner_idpetownerappoint: 8,
    pet_idpetappoint: 8,
    type: "pink"
  }


];
