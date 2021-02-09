import React from 'react';
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();

  console.log('라우터', router)
  return (
      <Layout>
        <p>Hello, my name is {router.query.name}. I use next.js</p>    
      </Layout>   
  );
};

export default Profile;