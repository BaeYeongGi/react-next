import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = props => {
  return (
    <>
      <Link href={`/profile?name=${props.name}`}>
        <a>Go to {props.name}'s profile</a>
      </Link>
    </>
  )
}

const Index = () => {
  return (
  <>
    <Layout>
      <h1>Friends List</h1>
      <ProfileLink name="subeen" />
      <ProfileLink name="daehwan" />
      <ProfileLink name="seokjin" />
    </Layout>
  </>
  )
}
export default Index;