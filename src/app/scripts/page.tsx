"use client";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicGameComponent = dynamic(
  () => import('@/app/scripts/game'),
  {
    ssr: false,
    loading: () => <></>,
  }
);

const TestPage: NextPage = () => {
  return <DynamicGameComponent />;
};

export default TestPage;