interface ipServiceInterface {
  data: {
    country: string;
    loc: string;
    abuse: {
      country: string;
      address: string;
      phone: string;
      name: string;
      email: string;
      network: string;
    };
    city: string;
    timezone: string;
    ip: string;
    privacy: {
      proxy: boolean;
      vpn: boolean;
      tor: boolean;
      hosting: boolean;
      service: string;
      relay: boolean;
    };
    domains: { total: number; domains: any[]; page: number };
    hostname: string;
    company: { domain: string; name: string; type: string };
    postal: string;
    region: string;
    asn: {
      route: string;
      domain: string;
      name: string;
      type: string;
      asn: string;
    };
  };
}

export const ipServiceMockResponse: ipServiceInterface = {
  data: {
    ip: "31.202.22.60",
    hostname: "31-202-22-60-kh.maxnet.ua",
    city: "Kharkiv",
    region: "Kharkiv",
    country: "UA",
    loc: "49.9808,36.2527",
    postal: "61000",
    timezone: "Europe/Kyiv",
    asn: {
      asn: "AS34700",
      name: "MAXNET TELECOM, LTD",
      domain: "maxnet.ua",
      route: "31.202.0.0/17",
      type: "isp",
    },
    company: {
      name: "Maxnet LLC, Kharkiv",
      domain: "maxnet.ua",
      type: "isp",
    },
    privacy: {
      vpn: false,
      proxy: false,
      tor: false,
      relay: false,
      hosting: false,
      service: "",
    },
    abuse: {
      address: "MAXNET, Pushkinska str. 14, Kharkiv, Ukraine",
      country: "UA",
      email: "abuse@maxnet.ua",
      name: "Maxnet LLC, Kharkiv",
      network: "31.202.0.0/17",
      phone: "+380 57 7209723",
    },
    domains: {
      page: 0,
      total: 0,
      domains: [],
    },
  },
};

export const weatherForWeekResponse = {
  data: {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1698159600,
        main: {
          temp: 11.39,
          feels_like: 10.52,
          temp_min: 11.39,
          temp_max: 11.39,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 996,
          humidity: 74,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 3.1,
          deg: 319,
          gust: 7.61,
        },
        visibility: 10000,
        pop: 0.44,
        rain: {
          "3h": 0.81,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-24 15:00:00",
      },
      {
        dt: 1698170400,
        main: {
          temp: 10.8,
          feels_like: 9.92,
          temp_min: 9.62,
          temp_max: 10.8,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 996,
          humidity: 76,
          temp_kf: 1.18,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "рвані хмари",
            icon: "04n",
          },
        ],
        clouds: {
          all: 69,
        },
        wind: {
          speed: 2.32,
          deg: 349,
          gust: 5.6,
        },
        visibility: 10000,
        pop: 0.24,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-24 18:00:00",
      },
      {
        dt: 1698181200,
        main: {
          temp: 9.65,
          feels_like: 9.07,
          temp_min: 8.78,
          temp_max: 9.65,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 997,
          humidity: 79,
          temp_kf: 0.87,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "уривчасті хмари",
            icon: "03n",
          },
        ],
        clouds: {
          all: 42,
        },
        wind: {
          speed: 1.68,
          deg: 342,
          gust: 3.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-24 21:00:00",
      },
      {
        dt: 1698192000,
        main: {
          temp: 9.04,
          feels_like: 9.04,
          temp_min: 9.04,
          temp_max: 9.04,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 997,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "рвані хмари",
            icon: "04n",
          },
        ],
        clouds: {
          all: 60,
        },
        wind: {
          speed: 1.31,
          deg: 31,
          gust: 1.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-25 00:00:00",
      },
      {
        dt: 1698202800,
        main: {
          temp: 7.31,
          feels_like: 6.48,
          temp_min: 7.31,
          temp_max: 7.31,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 997,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04n",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 1.59,
          deg: 48,
          gust: 2.31,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-25 03:00:00",
      },
      {
        dt: 1698213600,
        main: {
          temp: 7.57,
          feels_like: 6.23,
          temp_min: 7.57,
          temp_max: 7.57,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 997,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.15,
          deg: 96,
          gust: 2.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-25 06:00:00",
      },
      {
        dt: 1698224400,
        main: {
          temp: 9.65,
          feels_like: 8.31,
          temp_min: 9.65,
          temp_max: 9.65,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 997,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.65,
          deg: 109,
          gust: 3.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-25 09:00:00",
      },
      {
        dt: 1698235200,
        main: {
          temp: 10.8,
          feels_like: 9.45,
          temp_min: 10.8,
          temp_max: 10.8,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 995,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.22,
          deg: 137,
          gust: 4.44,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-25 12:00:00",
      },
      {
        dt: 1698246000,
        main: {
          temp: 9.82,
          feels_like: 7.62,
          temp_min: 9.82,
          temp_max: 9.82,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 993,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.36,
          deg: 112,
          gust: 8.4,
        },
        visibility: 10000,
        pop: 0.64,
        rain: {
          "3h": 0.44,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-25 15:00:00",
      },
      {
        dt: 1698256800,
        main: {
          temp: 7.85,
          feels_like: 4.62,
          temp_min: 7.85,
          temp_max: 7.85,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 991,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "помірний дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.71,
          deg: 113,
          gust: 12.11,
        },
        visibility: 6467,
        pop: 1,
        rain: {
          "3h": 4.38,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-25 18:00:00",
      },
      {
        dt: 1698267600,
        main: {
          temp: 7.27,
          feels_like: 3.2,
          temp_min: 7.27,
          temp_max: 7.27,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 988,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "помірний дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 7.75,
          deg: 114,
          gust: 15.6,
        },
        visibility: 3841,
        pop: 1,
        rain: {
          "3h": 11.38,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-25 21:00:00",
      },
      {
        dt: 1698278400,
        main: {
          temp: 7.82,
          feels_like: 4.25,
          temp_min: 7.82,
          temp_max: 7.82,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 986,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "помірний дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.66,
          deg: 123,
          gust: 14.2,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 6.19,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-26 00:00:00",
      },
      {
        dt: 1698289200,
        main: {
          temp: 8.28,
          feels_like: 5.37,
          temp_min: 8.28,
          temp_max: 8.28,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 984,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.18,
          deg: 108,
          gust: 10.22,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.88,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-26 03:00:00",
      },
      {
        dt: 1698300000,
        main: {
          temp: 9.13,
          feels_like: 6.8,
          temp_min: 9.13,
          temp_max: 9.13,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 984,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.29,
          deg: 113,
          gust: 8.9,
        },
        visibility: 10000,
        pop: 0.96,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-26 06:00:00",
      },
      {
        dt: 1698310800,
        main: {
          temp: 9.93,
          feels_like: 8.05,
          temp_min: 9.93,
          temp_max: 9.93,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 984,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.71,
          deg: 115,
          gust: 6.81,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-26 09:00:00",
      },
      {
        dt: 1698321600,
        main: {
          temp: 11.04,
          feels_like: 10.63,
          temp_min: 11.04,
          temp_max: 11.04,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 983,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.6,
          deg: 125,
          gust: 6.53,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-26 12:00:00",
      },
      {
        dt: 1698332400,
        main: {
          temp: 11.69,
          feels_like: 11.34,
          temp_min: 11.69,
          temp_max: 11.69,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 984,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.62,
          deg: 257,
          gust: 7.5,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          "3h": 0.19,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-26 15:00:00",
      },
      {
        dt: 1698343200,
        main: {
          temp: 10.42,
          feels_like: 9.95,
          temp_min: 10.42,
          temp_max: 10.42,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 985,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "рвані хмари",
            icon: "04n",
          },
        ],
        clouds: {
          all: 83,
        },
        wind: {
          speed: 2.56,
          deg: 256,
          gust: 7.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-26 18:00:00",
      },
      {
        dt: 1698354000,
        main: {
          temp: 9.81,
          feels_like: 9.57,
          temp_min: 9.81,
          temp_max: 9.81,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 985,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "рвані хмари",
            icon: "04n",
          },
        ],
        clouds: {
          all: 62,
        },
        wind: {
          speed: 1.37,
          deg: 231,
          gust: 1.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-26 21:00:00",
      },
      {
        dt: 1698364800,
        main: {
          temp: 10.53,
          feels_like: 9.96,
          temp_min: 10.53,
          temp_max: 10.53,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 984,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "рвані хмари",
            icon: "04n",
          },
        ],
        clouds: {
          all: 81,
        },
        wind: {
          speed: 2.06,
          deg: 165,
          gust: 4.61,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-27 00:00:00",
      },
      {
        dt: 1698375600,
        main: {
          temp: 10.86,
          feels_like: 10.38,
          temp_min: 10.86,
          temp_max: 10.86,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 984,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.76,
          deg: 173,
          gust: 8.4,
        },
        visibility: 10000,
        pop: 0.12,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-27 03:00:00",
      },
      {
        dt: 1698386400,
        main: {
          temp: 11.38,
          feels_like: 11.13,
          temp_min: 11.38,
          temp_max: 11.38,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 983,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.67,
          deg: 188,
          gust: 9.02,
        },
        visibility: 10000,
        pop: 0.72,
        rain: {
          "3h": 2.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-27 06:00:00",
      },
      {
        dt: 1698397200,
        main: {
          temp: 12.84,
          feels_like: 12.56,
          temp_min: 12.84,
          temp_max: 12.84,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 983,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.19,
          deg: 205,
          gust: 11.5,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.63,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-27 09:00:00",
      },
      {
        dt: 1698408000,
        main: {
          temp: 14.44,
          feels_like: 14.11,
          temp_min: 14.44,
          temp_max: 14.44,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 982,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.61,
          deg: 219,
          gust: 10.4,
        },
        visibility: 10000,
        pop: 0.76,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-27 12:00:00",
      },
      {
        dt: 1698418800,
        main: {
          temp: 13.62,
          feels_like: 13.41,
          temp_min: 13.62,
          temp_max: 13.62,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 982,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.61,
          deg: 196,
          gust: 7.4,
        },
        visibility: 10000,
        pop: 0.6,
        rain: {
          "3h": 0.19,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-27 15:00:00",
      },
      {
        dt: 1698429600,
        main: {
          temp: 13.22,
          feels_like: 13.08,
          temp_min: 13.22,
          temp_max: 13.22,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 982,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.3,
          deg: 194,
          gust: 6.5,
        },
        visibility: 10000,
        pop: 0.64,
        rain: {
          "3h": 0.31,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-27 18:00:00",
      },
      {
        dt: 1698440400,
        main: {
          temp: 13.35,
          feels_like: 13.22,
          temp_min: 13.35,
          temp_max: 13.35,
          pressure: 998,
          sea_level: 998,
          grnd_level: 980,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.09,
          deg: 147,
          gust: 8.62,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.63,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-27 21:00:00",
      },
      {
        dt: 1698451200,
        main: {
          temp: 13.41,
          feels_like: 13.29,
          temp_min: 13.41,
          temp_max: 13.41,
          pressure: 996,
          sea_level: 996,
          grnd_level: 978,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.49,
          deg: 165,
          gust: 12.5,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.5,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-28 00:00:00",
      },
      {
        dt: 1698462000,
        main: {
          temp: 13.87,
          feels_like: 13.79,
          temp_min: 13.87,
          temp_max: 13.87,
          pressure: 992,
          sea_level: 992,
          grnd_level: 974,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "помірний дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.78,
          deg: 164,
          gust: 14.3,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 3.31,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-28 03:00:00",
      },
      {
        dt: 1698472800,
        main: {
          temp: 15.58,
          feels_like: 15.57,
          temp_min: 15.58,
          temp_max: 15.58,
          pressure: 990,
          sea_level: 990,
          grnd_level: 972,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.88,
          deg: 203,
          gust: 14.12,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 2.94,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-28 06:00:00",
      },
      {
        dt: 1698483600,
        main: {
          temp: 15.43,
          feels_like: 14.62,
          temp_min: 15.43,
          temp_max: 15.43,
          pressure: 991,
          sea_level: 991,
          grnd_level: 973,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10d",
          },
        ],
        clouds: {
          all: 54,
        },
        wind: {
          speed: 9.78,
          deg: 234,
          gust: 17.01,
        },
        visibility: 10000,
        pop: 0.8,
        rain: {
          "3h": 0.81,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-28 09:00:00",
      },
      {
        dt: 1698494400,
        main: {
          temp: 12.62,
          feels_like: 11.77,
          temp_min: 12.62,
          temp_max: 12.62,
          pressure: 992,
          sea_level: 992,
          grnd_level: 974,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "рвані хмари",
            icon: "04d",
          },
        ],
        clouds: {
          all: 63,
        },
        wind: {
          speed: 11.06,
          deg: 243,
          gust: 20.43,
        },
        visibility: 10000,
        pop: 0.72,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-28 12:00:00",
      },
      {
        dt: 1698505200,
        main: {
          temp: 12.48,
          feels_like: 11.51,
          temp_min: 12.48,
          temp_max: 12.48,
          pressure: 995,
          sea_level: 995,
          grnd_level: 977,
          humidity: 66,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дощ",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 11.23,
          deg: 257,
          gust: 20.4,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-28 15:00:00",
      },
      {
        dt: 1698516000,
        main: {
          temp: 10.68,
          feels_like: 9.5,
          temp_min: 10.68,
          temp_max: 10.68,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 981,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 10.64,
          deg: 263,
          gust: 18.7,
        },
        visibility: 10000,
        pop: 0.2,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-28 18:00:00",
      },
      {
        dt: 1698526800,
        main: {
          temp: 9.47,
          feels_like: 5.82,
          temp_min: 9.47,
          temp_max: 9.47,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 986,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 8.64,
          deg: 271,
          gust: 15.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-28 21:00:00",
      },
      {
        dt: 1698537600,
        main: {
          temp: 7.99,
          feels_like: 4.2,
          temp_min: 7.99,
          temp_max: 7.99,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 989,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04n",
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 7.51,
          deg: 269,
          gust: 13.7,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-29 00:00:00",
      },
      {
        dt: 1698548400,
        main: {
          temp: 7.93,
          feels_like: 4.51,
          temp_min: 7.93,
          temp_max: 7.93,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 991,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "уривчасті хмари",
            icon: "03n",
          },
        ],
        clouds: {
          all: 39,
        },
        wind: {
          speed: 6.31,
          deg: 274,
          gust: 14.21,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-10-29 03:00:00",
      },
      {
        dt: 1698559200,
        main: {
          temp: 8.81,
          feels_like: 5.82,
          temp_min: 8.81,
          temp_max: 8.81,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 993,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "уривчасті хмари",
            icon: "03d",
          },
        ],
        clouds: {
          all: 30,
        },
        wind: {
          speed: 5.74,
          deg: 272,
          gust: 13.3,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-29 06:00:00",
      },
      {
        dt: 1698570000,
        main: {
          temp: 10.26,
          feels_like: 9.25,
          temp_min: 10.26,
          temp_max: 10.26,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 995,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 4.81,
          deg: 275,
          gust: 10.91,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-29 09:00:00",
      },
      {
        dt: 1698580800,
        main: {
          temp: 11.14,
          feels_like: 10.14,
          temp_min: 11.14,
          temp_max: 11.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 996,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "хмарно",
            icon: "04d",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 4.28,
          deg: 298,
          gust: 9.53,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-10-29 12:00:00",
      },
    ],
    city: {
      id: 706483,
      name: "Kharkiv",
      coord: {
        lat: 50,
        lon: 36.25,
      },
      country: "UA",
      population: 1430885,
      timezone: 10800,
      sunrise: 1698120622,
      sunset: 1698157672,
    },
  },
};

interface weatherForDayInterface {
  data: {
    visibility: number;
    timezone: number;
    main: {
      temp: number;
      temp_min: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      feels_like: number;
      temp_max: number;
    };
    clouds: { all: number };
    sys: { country: string; sunrise: number; sunset: number };
    dt: number;
    coord: { lon: number; lat: number };
    weather: { icon: string; description: string; main: string; id: number }[];
    name: string;
    cod: number;
    id: number;
    base: string;
    wind: { deg: number; speed: number; gust: number };
  };
}
export const weatherForDayResponse: weatherForDayInterface = {
  data: {
    coord: {
      lon: 36.25,
      lat: 50,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "рвані хмари",
        icon: "04n",
      },
    ],
    base: "stations",
    main: {
      temp: 11.39,
      feels_like: 10.52,
      temp_min: 11.39,
      temp_max: 11.39,
      pressure: 1014,
      humidity: 74,
      sea_level: 1014,
      grnd_level: 996,
    },
    visibility: 10000,
    wind: {
      speed: 3.1,
      deg: 319,
      gust: 7.61,
    },
    clouds: {
      all: 71,
    },
    dt: 1698159923,
    sys: {
      country: "UA",
      sunrise: 1698120622,
      sunset: 1698157672,
    },
    timezone: 10800,
    id: 706483,
    name: "Kharkiv",
    cod: 200,
  },
};
