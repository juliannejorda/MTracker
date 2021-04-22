import { Bar, Doughnut } from "react-chartjs-2";

const ReadingGraph = ({ info, wantToRead, isReading, finishedReading }) => {
  const labels = ["Want To Read", "Is Reading", "Finished Reading"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of books",
        //backgroundColor: "rgb(255, 99, 132)",
        // "rgba(255, 206, 86, 0.2)",  'rgba(255, 206, 86, 1)',
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",

          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        // borderColor: "rgb(255, 99, 132)",
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",

          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        data: info,
        // [wantToRead, isReading, finishedReading],
        // data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <>
      {/* <h1>Your reading status:</h1> */}
      <Bar
        // width={50}
        height={35}
        // options={{
        //   maintainAspectRatio: true,
        //   legend: { display: true },
        //   tooltips: {
        //     callbacks: {
        //       label: function (tooltipItem) {
        //         return tooltipItem.yLabel;
        //       },
        //     },
        //   },
        //   scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] },
        // }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={data}
      />
      <br></br>
    </>
  );
};

export default ReadingGraph;
