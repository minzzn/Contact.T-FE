import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'middle',
      },
      title: {
        display: true,
        text: '월 접속자 수',
      },
    },
    // 부모 요소의 사이즈 변화에 따라 뭉개지는 것을 방지하는 옵션
    maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
      {
        label: '개발자 접속 수',
        data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '실 사용자 접속 수',
        data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
};  

export const Chart = () => {
    return (
        <Line
            options={options}
            data={data}
            style={{
              width: "100%",
              height: "100%"
            }}
        />
    )
}