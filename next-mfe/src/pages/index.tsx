export default function Home() {
  let data = 'No Data';
  const fetchData = async () => {
    fetch('http://localhost:3000/api/hello').then((res) => {
      console.log(res)
      res.json().then((d) => {
        console.log(d);
        data = d;
      });
    });
  };
  return (
    <div className="flex flex-wrap content-center justify-center h-screen bg-[--bg-color] text-white">
      This is a Test Screen
      <button onClick={fetchData}>Get Data</button>
      {data}
    </div>
  );
}
