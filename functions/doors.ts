import DoorModel from "model/doorModel";

export function doorCreate(amount: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: amount }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorWithGift;
    return new DoorModel(number, hasGift);
  });
}

export function actualizeDoors(
  doors: DoorModel[] ,
  modifiedDoor: DoorModel
): DoorModel[] {
  return doors.map((actualDoor) => {
    const equalModified = actualDoor.number === modifiedDoor.number;

    if (equalModified) {
      return modifiedDoor;
    } else {
      return modifiedDoor.oppened ? actualDoor : actualDoor.MarkOff();
    }
  });
}
