import React, { useContext } from "react";
import Messmember from "../components/Messmember";
import Notice from "../components/Notice";
import Title from "../components/Title";
import { Store } from "../context";
import Loading from "./Loading";
function Home() {
  const { memberInfo, loading } = useContext(Store);

  const member = memberInfo.map((item) => {
    return (
      <Messmember
        key={item.id}
        name={item.memberInfo.name}
        desig={item.memberInfo.desig}
        url={item.memberInfo.url}
        id={item.id}
      />
    );
  });

  return (
    <div className="container-fluid">
      <Notice />
      <Title title="All members information" />
      <div className="row"> {loading ? <Loading /> : member}</div>
    </div>
  );
}

export default Home;
