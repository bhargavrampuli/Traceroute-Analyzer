import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { GList } from "../types";



import faker from 'faker';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
    google_list:GList[]|undefined;
    
}

const labels = ['1st Hop', '2nd Hop', '3rd Hop', '4th Hop', '5th Hop'];



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};



export const template = {
    labels,
    datasets: [
      {
        label: 'RTT at each Hop',
        data: [10,20,30,40,50],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Average RTT',
        data: [15.5,15.5,15.5,15.5,15.5],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


const LineChart: React.FunctionComponent<Props> = ({ google_list }) => 
{
    const generateChartData = () => {
        const data: number[] = [];
        const labels: string[] = [];
        const data_avg: number[] = [];
        var x: number = 0;
        var y: number= 0;

        google_list?.forEach((items) => {
          data.push(items.rtt);
          labels.push(items.hostname);
          y= items.rtt + y;
          x= x + 1;
        });
    
        var avg: number;
        avg= y/x;

        google_list?.forEach((items) => {
           data_avg.push(avg);
          });

        return {
            labels,
            datasets: [
              {
                label: 'RTT at each Hop',
                data: data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Average RTT',
                data: data_avg,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
        };
      };
    
      return (
          <Line data={generateChartData()} options={options} />
      );
    };
    
    export default LineChart;
