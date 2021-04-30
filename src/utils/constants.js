export const categoryNames = {
  ADVISORIES: "Advisories",
  BUSINESS: "Business",
  CULTURALS: "Culturals",
  EVENTS: "Events",
  INVESTS: "Invests",
  LIFESTYLES: "Lifestyles",
  TECHNOLOGIES: "Technologies",
  VIDEOS: "Videos",
  VIEWS: "Views"
};
export const subCategories = {
  ABOUT_BUSINESS: "About business",
  BOOKS: "Books",
  BUSINESSMENS: "Businessmens",
  COMMERCES: "Commerces",
  EDUCATIONS: "Educations",
  ENTERPRISES: "Enterprises",
  EXISTENCES: "Existences",
  EXPERTS: "Experts",
  FINANCE: "Finance",
  GOVERNS: "Governs",
  HEALTHS: "Healths",
  LANDS: "Lands",
  STARTUPS: "Startups",
  TRAVELS: "Travels",
  ENTERTAIMENT: 'Entertainment'
};
export const nestedCategories = {
  BANKS: "Banks",
  STOCKS: "Stocks",
  INSURANCE: "Insurrance",
  GOLDS: "Golds",
  SOCIETY: "Society",
  TENDENCYS: "Tendencys",
  KOLS: "KOLs",
  CONSUMPTION: "Consumption",
  ADVISORY: "Advisory",
  NUTRITION: "Nutrition",
  MEN: "Men",
  WOMAN: "Women",
  ADMISSIONS: "Admissions",
  STUDY_ABROARD: "Study abroad",
  PICTURES: "Pictures",
  DESTINATION: "Destionation",
  DISCOVER: "Discover",
  EATING_PLAYING: "Eating and playing",
  VIETSTART: "Viet Star",
  STAGE: "Stage",
  FILM: "Film",
  FASHION: "Fashion",
  MAKE_UP: "Make up",
  GOOD_HEALTH: "Good healths"
};
export const menus = [
  {
    id: categoryNames.VIEWS,
    linkText: "Góc nhìn",
    link: "/",
    child: true,
    submenu: [
      {
        id: subCategories.EXPERTS,
        link: "/",
        linkText: "Chuyên gia"
        // third_menu: [
        //   {
        //     id: subCategories.EDUCATIONS,
        //     link: "/",
        //     linkText: "Giáo dục"
        //   }
        // ]
      },
      {
        id: subCategories.ABOUT_BUSINESS,
        link: "/",
        linkText: "Chuyện làm ăn"
      }
    ]
  },
  {
    id: categoryNames.INVESTS,
    linkText: "Đầu tư",
    link: "/",
    child: true,
    submenu: [
      {
        id: subCategories.LANDS,
        link: "/",
        linkText: "Bất động sản"
      },
      {
        id: subCategories.FINANCE,
        link: "/",
        linkText: "Tài chính",
        child: true,
        third_menu: [
          {
            id: nestedCategories.BANKS,
            link: "/",
            linkText: "Ngân hàng"
          },
          {
            id: nestedCategories.STOCKS,
            link: "/",
            linkText: "Chứng khoán"
          },
          {
            id: nestedCategories.INSURANCE,
            link: "/",
            linkText: "Bảo hiểm"
          },
          {
            id: nestedCategories.GOLDS,
            link: "/",
            linkText: "Vàng"
          }
        ]
      }
    ]
  },
  {
    id: categoryNames.BUSINESS,
    linkText: "Kinh doanh",
    link: "/",
    child: true,
    submenu: [
      {
        id: subCategories.ENTERPRISES,
        link: "/",
        linkText: "Doanh nghiệp"
      },
      {
        id: subCategories.BUSINESSMENS,
        link: "/",
        linkText: "Doanh nhân"
      },
      {
        id: subCategories.COMMERCES,
        link: "/",
        linkText: "Thương mại"
      },
      {
        id: subCategories.STARTUPS,
        link: "/",
        linkText: "Khởi nghiệp"
      },
      {
        id: subCategories.GOVERNS,
        link: "/",
        linkText: "Quản trị"
      }
    ]
  },
  {
    id: categoryNames.LIFESTYLES,
    linkText: "Nhịp sống",
    link: "/",
    child: true,
    submenu: [
      {
        id: subCategories.EXISTENCES,
        link: "/",
        linkText: "Đời sống",
        child: true,
        third_menu: [
          {
            id: nestedCategories.SOCIETY,
            link: "/",
            linkText: "Xã hội"
          },
          {
            id: nestedCategories.TENDENCYS,
            link: "/",
            linkText: "Xu hướng"
          },
          {
            id: nestedCategories.KOLS,
            link: "/",
            linkText: "Nhân vật"
          },
          {
            id: nestedCategories.CONSUMPTION,
            link: "/",
            linkText: "Tiêu dùng"
          }
        ]
      },
      {
        id: subCategories.HEALTHS,
        link: "/",
        linkText: "Sức khỏe",
        child: true,
        third_menu: [
          {
            id: nestedCategories.ADVISORY,
            link: "/",
            linkText: "Tư vấn"
          },
          {
            id: nestedCategories.NUTRITION,
            link: "/",
            linkText: "Dinh dưỡng"
          },
          {
            id: nestedCategories.GOOD_HEALTH,
            link: "/",
            linkText: "Sống khỏe"
          },
          {
            id: nestedCategories.MEN,
            link: "/",
            linkText: "Đàn ông"
          },
          {
            id: nestedCategories.WOMAN,
            link: "/",
            linkText: "Đàn bà"
          }
        ]
      }
    ]
  },
  {
    id: categoryNames.CULTURALS,
    linkText: "Văn hóa",
    link: "/",
    child: true,
    submenu: [
      {
        id: subCategories.EDUCATIONS,
        linkText: "Giáo dục",
        link: "/",
        child: true,
        third_menu: [
          {
            id: nestedCategories.ADMISSIONS,
            link: "/",
            linkText: "Tuyển sinh"
          },
          {
            id: nestedCategories.STUDY_ABROARD,
            link: "/",
            linkText: "Du học"
          },
        ]
      },
      {
        id: subCategories.TRAVELS,
        linkText: "Du lịch",
        link: "/",
        child: [
          {
            id: nestedCategories.PICTURES,
            link: "/",
            linkText: "Ảnh"
          },
          {
            id: nestedCategories.DESTINATION,
            link: "/",
            linkText: "Điểm đến"
          },
          {
            id: nestedCategories.DISCOVER,
            link: "/",
            linkText: "Khám phá"
          },
          {
            id: nestedCategories.EATING_PLAYING,
            link: "/",
            linkText: "Ăn gì Chơi gì"
          },
        ]
      },
      {
        id: subCategories.ENTERTAIMENT,
        linkText: "Giải trí",
        link: "/",
        child: true,
        third_menu: [
          {
            id: nestedCategories.VIETSTART,
            link: "/",
            linkText: "Sao Việt"
          },
          {
            id: nestedCategories.STAGE,
            link: "/",
            linkText: "Sân khấu"
          },
          {
            id: nestedCategories.FILM,
            link: "/",
            linkText: "Điện ảnh"
          },
          {
            id: nestedCategories.FASHION,
            link: "/",
            linkText: "Thời trang"
          },
          {
            id: nestedCategories.MAKE_UP,
            link: "/",
            linkText: "Làm đẹp"
          },
        ]
      },
      {
        id: subCategories.BOOKS,
        linkText: "Sách",
        link: "/"
      },
    ]
  },
  {
    id: categoryNames.TECHNOLOGIES,
    linkText: "Công nghệ",
    link: "/",
    child: false
  }
];
