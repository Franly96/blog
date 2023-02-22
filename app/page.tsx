import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://localhost:6000/post");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <div>Hola mundo</div>
    </main>
  );
}
