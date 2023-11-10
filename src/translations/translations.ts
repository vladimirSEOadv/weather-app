// const template = {
//   text: {
//     en: "",
//     uk: "",
//   },
// };

type TranslationsValue = string | string[] | Record<string, TranslationsValue>;

interface TranslationsInterface {
  [key: string]: TranslationsValue;
}

export const translations: TranslationsInterface = {
  navLinks: {
    main: {
      en: "Main page",
      uk: "Головна",
    },
    favorite: {
      en: "Favorite",
      uk: "Обране",
    },
  },
  inputs: {
    debounce: {
      placeholder: {
        en: "Search",
        uk: "Пошук",
      },
    },
  },
  buttons: {
    addBlock: {
      en: "Add block",
      uk: "Додати блок",
    },
    deleteButton: {
      en: "Delete",
      uk: "Видалити",
    },
    day: {
      en: "Day",
      uk: "День",
    },
    week: {
      en: "Week",
      uk: "Тиждень",
    },
    addToFavorite: {
      en: "To favorite",
      uk: "В обране",
    },
  },
  selects: {
    dayOrNight: {
      en: ["daily", "nightly"],
      uk: ["в день", "у ночi"],
    },
  },
  forecastForDay: {
    title: {
      en: "Weather in",
      uk: "Погода в",
    },
    tempSection: {
      title: {
        en: "Temperature",
        uk: "Температура",
      },
      max: {
        en: "Maximum",
        uk: "Максимальна",
      },
      average: {
        en: "Average",
        uk: "В середньому",
      },
      min: {
        en: "Minimal",
        uk: "Мінімальна",
      },
    },
    windSection: {
      title: {
        en: "Wind",
        uk: "Вітер",
      },
      gusts: {
        en: "Gusts of wind",
        uk: "Пориви вітру",
      },
      direction: {
        en: "Wind direction",
        uk: "Напрямок вітру",
      },
      speed: {
        en: "Speed",
        uk: "Швидкість",
      },
    },
    pressureSection: {
      title: {
        en: "Pressure",
        uk: "Тиск",
      },
      pressure: {
        en: "Pressure",
        uk: "Тиск",
      },
      aboveSeaLevel: {
        en: "Above sea level",
        uk: "Над рівнем моря",
      },
      aboveGroundLevel: {
        en: "Above ground level",
        uk: "Над рівнем землі",
      },
    },
    descriptionSection: {
      title: {
        en: "In general",
        uk: "В загальному",
      },
      description: {
        en: "Weather",
        uk: "Погода",
      },
    },
  },
} as const;
