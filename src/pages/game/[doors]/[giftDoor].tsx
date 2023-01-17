import styles from "@style/game.module.css";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Door } from "@/components/Door";
import { actualizeDoors, doorCreate } from "functions/doors";

export default function Game() {
  const [doors, setDoors] = useState([]);
  const [valid, setValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const doors = +router.query.doors!;
    const giftDoor = +router.query.giftDoor!;

    const amountValidDoors = doors >= 3 && doors <= 25;
    const hasGiftDoor = giftDoor >= 1 && giftDoor <= doors;

    setValid(amountValidDoors && hasGiftDoor);
  }, [doors]);

  useEffect(() => {
    const doors = +router.query.doors!;
    const giftDoor = +router.query.giftDoor!;
    //@ts-ignore
    setDoors(doorCreate(doors, giftDoor));
  }, [router.query]);

  function renderDoors() {
    return doors.map((door: any) => {
      return (
        <Door
          key={door.number}
          doorClass={door}
          //@ts-ignore
          onChange={(newDoor) => setDoors(actualizeDoors(doors, newDoor))}
        />
      );
    });
  }
  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
