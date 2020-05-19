import { Header, Name } from "@axa-fr/react-toolkit-all"
import logo from "../../public/logo.png"
export default function Home() {
  return (<Header>
    <Name
      title="Application sous nextJS"
      subtitle="DMS"
      img={logo}
      alt="Logo React"
      onClick={() => { }}
    />
  </Header>)
}
