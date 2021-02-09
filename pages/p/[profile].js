import React from 'react';
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  return (
    <Layout>
      <p>Hello, my name is {router.query.profile}. I use Next.js</p>
    </Layout>
  );
};

export default Profile;