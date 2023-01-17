import styles from "@style/form.module.css";
import Link from "next/link";

import { Card } from "@/components/Card";
import { NumericalInput } from "@/components/NumericalInput";
import { useState } from "react";

export default function Form() {
  const [amountDoors, setAmountDoors] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumericalInput
            value={amountDoors}
            onChange={(newAmount) => setAmountDoors(newAmount)}
            text="Amount of doors?"
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumericalInput
            value={doorWithGift}
            onChange={(newAmount) => setDoorWithGift(newAmount)}
            text="Gift door?"
          />
        </Card>
        <Card bgColor="#28a085">
          <Link
            href={`/game/${amountDoors}/${doorWithGift}`}
            className={styles.link}
          >
            Iniciar
          </Link>
        </Card>
      </div>
    </div>
  );
}
