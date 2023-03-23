import styles from "./page.module.css";
import { ClientComponent } from "./clientComponent";

export default function Home() {
  const emptyObject = {};
  const objectWithNullPrototype = Object.create(null);
  objectWithNullPrototype.foo = "bar";
  return (
    <main className={styles.main}>
      <ClientComponent myObject={emptyObject} />
      <ClientComponent myObject={objectWithNullPrototype} />
    </main>
  );
}
