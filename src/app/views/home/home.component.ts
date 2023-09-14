import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
          color: '#1A56DB',
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
          color: '#7E3AF2',
        },
      ],
      chart: {
        height: 360,
        type: 'area',
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },

      xaxis: {
        categories: [
          '01 Feb',
          '02 Feb',
          '03 Feb',
          '04 Feb',
          '05 Feb',
          '06 Feb',
          '07 Feb',
        ],
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
    };
  }

  ngOnInit(): void {}
}
