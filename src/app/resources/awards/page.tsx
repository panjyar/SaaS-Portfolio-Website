import AllResource from "../components/AllResource";
import Events from "../components/Events";
import Awards from "../components/awards";
import Recognition from "../components/recognition";

export default function AllResourcePage() {
  return (
    <div className="mt-12" style={{padding:"4%"}}>
      <AllResource />
      <Events limit={3} />
      <Awards limit={3} />
      <Recognition limit={3} />
    </div>
  );
}