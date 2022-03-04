import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

const List: NextPage = () => {
  return (
    <>
      <Head>
        <title>damatricks</title>
      </Head>
      <Header />
      <Main />
    </>
  );
};

export default List;
