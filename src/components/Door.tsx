import styles from "@style/door.module.css";

import DoorModel from "model/doorModel";

import { Gift } from "./Gift";

interface DoorProps {
  doorClass: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export function Door({ doorClass, onChange }: DoorProps) {
  const selectedDoor =
    doorClass?.selected && !doorClass.oppened ? styles.selected : "";

  const changeSelected = () => {
    onChange(doorClass?.changeSelected());
  };

  const openDoor = (e: any) => {
    e.stopPropagation();
    onChange(doorClass?.open());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{doorClass?.number}</div>
        <div className={styles.doorHandle} onClick={openDoor}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={changeSelected}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        {doorClass?.closed ? 
          renderDoor() :
          doorClass?.hasGift ? <Gift /> : false
        }
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
