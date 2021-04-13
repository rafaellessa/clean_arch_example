import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class getParkingLot {
  parkingLotRepository: ParkingLotRepository;

  constructor(parkinLotRepository: ParkingLotRepository){
    this.parkingLotRepository = parkinLotRepository;
  }

  execute(code: string){
    return this.parkingLotRepository.getParkingLot(code)
  }
}