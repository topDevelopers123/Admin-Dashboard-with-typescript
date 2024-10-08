import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

const months = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = ({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        // position: "top" as const,
        display: true,
      },
      title: {
        display: false,
        // text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          // display:false
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
};

interface DoughnutChartProps {
  data: number[];
  backgroundColor: string[];
  labels: string[];
  cutout?: number | string;
  legend?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  data,
  backgroundColor,
  labels,
  cutout,
  legend = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [{ data, backgroundColor, borderWidth: 0, offset }],
  };
  const doughnutOption: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legend,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };
  return <Doughnut data={doughnutData} options={doughnutOption} />;
};

//pie

interface PieChartProps {
  data: number[];
  backgroundColor: string[];
  labels: string[];
  offset?: number[];
}

export const PieChart = ({
  data,
  backgroundColor,
  labels,
  offset,
}: PieChartProps) => {
  const PieData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [{ data, backgroundColor, borderWidth: 1, offset }],
  };
  const PieOption: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Pie data={PieData} options={PieOption} />;
};

//TODO line

interface LineChartProps {
  horizontal?: boolean;
  data: number[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  labels?: string[];
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels,
}: LineChartProps) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        // position: "top" as const,
        display: true,
      },
      title: {
        display: false,
        // text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          // display:false
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const Linedata: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={Linedata} />;
};
