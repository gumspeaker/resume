/* eslint-disable @typescript-eslint/ban-ts-comment */
import App from "@/components/App.mdx";
import { globalStyles } from "@/styles/globalStyles";
import { Global } from "@emotion/react";

export default function Home() {
  return (
    <div id="root">
      <Global styles={globalStyles} />
      {/* @ts-ignore */}
      <App lang="zh" />
    </div>
  );
}
