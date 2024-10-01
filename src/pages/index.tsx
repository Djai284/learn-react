// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from "./components/profile_props";
import Gallery from "./qcomps/state";
import Bio from "./qcomps/bios";
import RecipeList from "./qcomps/recipes";
import List from "./qcomps/list_keys_id";
import PackingList from "./qcomps/props_item";
import Form from "./qcomps/stuckForm";

export default function Home() {
  return (
    <>
      <Form />
    </>
  );
}
