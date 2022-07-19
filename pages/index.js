import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title> 🧗🏽Headless WP Stoke </title>
      </Head>

      <main className={styles.main}>
        {!session && (
          <div>
            <button>
              <Link href="/api/hello">To Gated WP content</Link>
            </button>

            <button onClick={() => signIn()}>Sign in with Github</button>
          </div>
        )}

        {session && (
          <>
            signed in as ({session.user.name}) <br />
            <div>You can now see Headless WP content</div>
            <button>
              <Link href="/api/hello">To Gated WP content</Link>
            </button>
          </>
        )}

        {session && (
          <button onClick={() => signOut()}>
            Sign Out({session.user.name})
          </button>
        )}

        <h1 className={styles.title}>oAuth Headless WP demo</h1>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a href="https://developers.wpengine.com/" target="_blank">
          Powered by <span className={styles.logo}>Fran_The_Dev</span>
        </a>
      </footer>
    </div>
  );
}
