// import Card from "@/components/Card";

import someAction from '@/app/actions/something'

export default function Home() {
  return (
    <div>
      <h1>

      Hello world
      </h1>
      {/* <Card title="Coffee" description="Small packet of instant coffee mix"/>
      <Card title="Sugar" description="500 grms Organic sugar"/> */}
    <button onClick={someAction}>click me</button>
    </div>
  );
}
 