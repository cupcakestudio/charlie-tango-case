import Head from "next/head";
 import styles from "src/pages/Home.module.css";
import { FormInput } from "./FormInput";
export default function FormCard() {
  return (<>
    <Head>
      <title>Your Estate | EDC</title>
    </Head>
    <div className="wrapper">
      <h1 className={styles.headline}>Hello TESA</h1>
      <div>
        <p>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>
      <div>
        <h2>Basic form example</h2>
        <p>
          This is simple example of how you could submit a form to another page
          in Next.js, without using a custom <code>submit</code> function (e.g.
          without JavaScript). It is unstyled and unfinished. You can use this
          as base, or implement your own solution.
        </p>
        {/* <p>
          Make sure to read the guide on{" "}
          <a
            href="https://nextjs.org/docs/guides/building-forms"
            target="_blank"
          >
            building forms in Next.js
          </a>
        </p> */}
      </div>
      <FormInput/>
    </div>
  </>
  );
}
