import ParkingLotAdapter from "../../adpter/ParkinLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from '../database/database';

export default class ParkingLotRepositorySQL implements ParkingLotRepository {

  async getParkingLot(code: string): Promise<ParkingLot> {
  
    const parkingLot = await database.query("select * from parking_lots where code = $1", [code]);

    return ParkingLotAdapter.create(parkingLot.code, parkingLot.capacity, parkingLot.openHour, parkingLot.closeHour, parkingLot.occupiedSpaces);

  }


  saveParkedCar(code: string, plate: string, date: Date): void {
    
  }

}