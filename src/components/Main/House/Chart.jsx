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
        color: "#5CC095",
        font: {
          size: 24,
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black', // x축 글씨 색상
          font: {
            size: 15, // x축 글씨 크기
          },
        },
      },
      y: {
        ticks: {
          color: 'black', // y축 글씨 색상
          font: {
            size: 15, // y축 글씨 크기
          },
        },
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
        data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
        borderColor: '#5CC095',
        backgroundColor: 'white',
      },
      {
        label: '실 사용자 접속 수',
        data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
        borderColor: '#1A4D2E',
        backgroundColor: 'black',
      },
    ],
};  

export const Chart = () => {
    return (
        <Line
            options={options}
            data={data}
            style={{
              width: "60%",
              height: "60%",
            }}
        />
    )
}