
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfileLink = props => {
  /*
    Link의
    'href'는 실제 이동할 경로
    'as'는 우리 URL에 어떻게 보일지 결정
  */
  return (
    <>
      <Link href={`/p/[profile]`} as={`/p/${props.profile}`} >        
        <a>Go to {props.profile}'s profile</a>
      </Link><br/>
    </>
  )
}

const Index = props => {
  const [ jsonData, setJsonData ] = useState([]);
  const userNameList = 'https://jsonplaceholder.typicode.com/users';

  const getUserName = async() => {
    return await axios.get(userNameList)
  }

  useEffect(() => {
    getUserName()
    .then((result) => {
      console.log('조회결과', result.data)
      setJsonData(result.data)
    })
    .catch((error) => {
      console.log('조회실패', error)
    })
  },[])

  return (
  <>
    <Layout>
      <h1>Friends List </h1>
      {
        jsonData.map((data) => (
          <ProfileLink key={data.id} profile={data.name}></ProfileLink>
        ))
      }
    </Layout>
  </>
  );
}
export default Index;